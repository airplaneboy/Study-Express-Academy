import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

const jsonResponse = (res: any, status: keyof typeof StatusCodes) => {
  return NextResponse.json(res, { status: StatusCodes[status] });
};

export default jsonResponse;
