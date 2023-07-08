import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  console.log(JSON.stringify(token, null, 2));
  return NextResponse.json(JSON.stringify(token, null, 2));
}
