import connectMongoose from '@/lib/mongooseConnect';
import Unit from '@/models/Unit';
import jsonResponse from '@/utils/jsonResponse';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';
import isAlphanumeric from 'validator/lib/isAlphanumeric';

export async function GET() {
  await connectMongoose();
  const units = await Unit.find({});
  if (!units) return jsonResponse({ error: 'There was an error' }, 'NOT_FOUND');

  return jsonResponse({ nbHits: units.length, units }, 'OK');
}

export async function POST(request: NextRequest) {
  try {
    await connectMongoose();
    const body = await request.json();

    const { title, description, course } = body;

    if (!title || !description || !course)
      return jsonResponse({ error: 'Unit needs title, description, and course' }, 'BAD_REQUEST');

    if (!isAlphanumeric(title, 'en-US', { ignore: ' -:' }))
      return jsonResponse(
        { error: "Unit's title can only contain alphabets, numbers and the following characters: '-' ':' " },
        'BAD_REQUEST'
      );

    if (await Unit.findOne({ title }))
      return jsonResponse({ error: 'Unit with same title already exists. Choose a different title' }, 'BAD_REQUEST');

    const unit = await Unit.create(body);

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return jsonResponse(unit, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
