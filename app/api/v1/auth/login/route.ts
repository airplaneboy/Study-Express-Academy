import { NextResponse } from 'next/server';
import connectMongoose from '@/utils/mongooseConnect';
import User from '@/models/User.js';
import { StatusCodes } from 'http-status-codes';
import CustomErrors from '@/errors';

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  await connectMongoose();
  const body: RequestBody = await request.json();

  const { username, password } = body;

  if (!username || !password) throw new CustomErrors.BadRequestError('Username or password does not exist');
  const user = await User.findOne({ username });
  if (!user) throw new CustomErrors.NotFoundError(`User "${username}" was not found)`);
  if (!(await user.verifyPassword(password))) throw new CustomErrors.UnauthenticatedError('Password is incorrect');
  return NextResponse.json({ user }, { status: StatusCodes.OK });
}