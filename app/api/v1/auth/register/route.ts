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
    const { email, providerId, provider, providerType, firstName, lastName } = body;

    if (!email || !providerId || !firstName || !lastName)
      return NextResponse.json({ error: 'Fill in all provider credential' }, { status: StatusCodes.BAD_REQUEST });

    if (await User.findOne({ email }))
      return NextResponse.json({ error: 'This provider email already exist' }, { status: StatusCodes.BAD_REQUEST });

    await User.create({
      email,
      provider: { id: providerId, name: provider, type: providerType },
      username,
      profile: { firstName, lastName },
    });

    return NextResponse.json({ msg: 'Successfully created provider user' }, { status: StatusCodes.CREATED });
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
