// ./src/app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody(req, process.env.SANITY_REVALIDATE_SECRET);

    if (!isValidSignature) {
      const message = 'Invalid signature';
      return new Response(JSON.stringify({ message, isValidSignature, body }), { status: 401 });
    }

    console.log(`From revalidate route: \n\tBody: ${JSON.stringify(body, null, 2)}`);
    // if (!body?._type) {
    //   const message = 'Bad Request';
    //   return new Response(JSON.stringify({ message, body }), { status: 400 });
    // }

    revalidatePath('/');

    return NextResponse.json({ body });
  } catch (err: any) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
