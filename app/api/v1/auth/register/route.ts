import { NextResponse } from 'next/server';
import connectMongoose from '@/utils/mongooseConnect';
import hello from '@/utils/hello';
import CustomErrors from '@/errors';
import { StatusCodes } from 'http-status-codes';
import User from '@/models/User';

interface RequestBody {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

hello();

export async function POST(request: Request) {
  await connectMongoose();

  const body: RequestBody = await request.json();

  const { email, password, firstName, lastName, username } = body;

  if (!email || !password || !firstName || !lastName || !username)
    throw new CustomErrors.BadRequestError('Fill in all credential');

  if (await User.findOne({ email })) throw new CustomErrors.BadRequestError('This user already exist');

  const user = await User.create({ email, password, username, profile: { firstName, lastName } });

  // res.status(StatusCodes.CREATED).redirect('/login').json({ msg: 'Successfully created user' });
  return NextResponse.json({ msg: 'Successfully created user', user }, { status: StatusCodes.CREATED });
}
