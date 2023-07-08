import { NextResponse } from 'next/server';
import connectMongoose from '@/lib/mongooseConnect';
import CustomErrors from '@/errors';
import { StatusCodes } from 'http-status-codes';
import User from '@/models/User';
import generateUsernames from '@/utils/generateUsername';

interface RequestBody {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export async function POST(request: Request) {
  await connectMongoose();
  const body: RequestBody = await request.json();

  const { email, password, firstName, lastName } = body;
  let username = body.username;

  if (!email || !password || !firstName || !lastName) throw new CustomErrors.BadRequestError('Fill in all credential');

  if (!username) {
    username = generateUsernames();
  }

  if (await User.findOne({ email })) throw new CustomErrors.BadRequestError('This user already exist');

  const user = await User.create({ email, password, username, profile: { firstName, lastName } });

  return NextResponse.json({ msg: 'Successfully created user', user }, { status: StatusCodes.CREATED });
}
