import { NextResponse } from 'next/server';
import connectMongoose from '@/lib/mongooseConnect';
import CustomErrors from '@/errors';
import { StatusCodes } from 'http-status-codes';
import User from '@/models/User';
import generateUsernames from '@/utils/generateUsername';

interface RequestBody {
  username: string;
  password?: string;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  providerId?: string;
  provider?: string;
  providerType?: string;
}

export async function POST(request: Request) {
  await connectMongoose();
  const isProvider = request.headers.has('X-Auth-Method');
  const body: RequestBody = await request.json();

  let username = body.username;
  if (!username) username = generateUsernames();

  //#region Provider Registration
  if (isProvider) {
    const { email, providerId, provider, providerType, name } = body;
    let { firstName, lastName } = body;

    if (!(firstName || lastName) && name) {
      const nameArray = name.trim().split(' ');

      firstName = nameArray[0];
      lastName = nameArray.slice(1).join(' ');
    }

    if (!email || !providerId)
      return NextResponse.json({ error: 'Fill in all provider credential' }, { status: StatusCodes.BAD_REQUEST });

    if (await User.findOne({ email }))
      return NextResponse.json({ error: 'This provider email already exist' }, { status: StatusCodes.BAD_REQUEST });

    const user = await User.create({
      email,
      provider: { id: providerId, name: provider, type: providerType },
      username,
      profile: { firstName, lastName },
    });

    return NextResponse.json({ id: user._id }, { status: StatusCodes.CREATED });
  }
  //#endregion

  //#region Default registration
  const { email, password, firstName, lastName } = body;

  if (!email || !password || !firstName || !lastName)
    return NextResponse.json({ error: 'Fill in all credential' }, { status: StatusCodes.BAD_REQUEST });

  if (await User.findOne({ email }))
    return NextResponse.json({ error: 'This user already exist' }, { status: StatusCodes.BAD_REQUEST });

  await User.create({ email, password, username, profile: { firstName, lastName } });

  return NextResponse.json({ msg: 'Successfully created user' }, { status: StatusCodes.CREATED });
  //#endregion
}
