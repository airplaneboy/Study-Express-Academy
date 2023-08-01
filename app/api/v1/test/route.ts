import { NextResponse } from 'next/server';

export function GET(request: Request) {
  console.log(
    '=====================================================Request====================================================='
  );
  console.log(request.headers.get('x-forwarded-port'));
  console.log(request.headers.get('x-forwarded-proto'));
  console.log(
    '=====================================================End Request====================================================='
  );

  return NextResponse.json('i was here');
}
