import { NextResponse } from 'next/server';
import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User.js';
import { StatusCodes } from 'http-status-codes';
interface RequestBody {
  username: string;
  password: string;
  email: string;
}

export async function POST(request: Request) {
  await connectMongoose();
  const body: RequestBody = await request.json();
  const isProvider = request.headers.has('X-Auth-Method');

  //#region Provider Login
  if (isProvider) {
    const { email } = body;

    if (!email) return NextResponse.json({ error: 'Email from provider does not exist' }, { status: 400 });

    const user = await User.findOne({ email });

    if (!user) return NextResponse.json({ error: `User "${email}" was not found)` }, { status: 404 });

    return NextResponse.json({ msg: 'Provider authentication was successful' }, { status: StatusCodes.OK });
  }
  //#endregion

  //#region Default Login
  const { username, password, email } = body;

  if (!(username || email) || !password)
    return NextResponse.json({ error: 'Username or password does not exist' }, { status: StatusCodes.BAD_REQUEST });

  const user = await User.findOne({ $or: [{ username }, { email }] });

  if (!user) return NextResponse.json({ error: `User "${email}" was not found)` }, { status: StatusCodes.NOT_FOUND });

  if (!(await user.verifyPassword(password)))
    return NextResponse.json({ error: 'Password is incorrect' }, { status: StatusCodes.UNAUTHORIZED });

  const finalUser = {
    username: user.username,
    email: user.email,
    role: user.role,
    id: user._id,
    image: user?.image,
    firstName: user.profile?.firstName,
    lastName: user.profile?.lastName,
  };

  return NextResponse.json(finalUser, { status: StatusCodes.OK });
  //#endregion
}
