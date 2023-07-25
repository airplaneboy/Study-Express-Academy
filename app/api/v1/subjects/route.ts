import connectMongoose from '@/lib/mongooseConnect';
import Course from '@/models/Course';
import Subject from '@/models/Subject';
import jsonResponse from '@/utils/jsonResponse';
import isAlpha from 'validator/lib/isAlpha';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function GET() {
  await connectMongoose();
  const subjects = await Subject.find({}).populate({ path: 'courses', select: 'title', model: Course });
  if (!subjects) return jsonResponse({ error: 'There was an error' }, 'NOT_FOUND');

  return jsonResponse({ nbHits: subjects.length, subjects }, 'OK');
}

export async function POST(request: NextRequest) {
  try {
    await connectMongoose();
    const body = await request.json();

    const { title, description } = body;

    if (!title || !description) return jsonResponse({ error: 'Subject needs title, and description' }, 'BAD_REQUEST');

    if (!isAlpha(title, 'en-US', { ignore: ' -:' }))
      return jsonResponse(
        { error: "Subject's title can only contain alphabets and the following characters: '-' ':' " },
        'BAD_REQUEST'
      );

    if (await Subject.findOne({ title }))
      return jsonResponse({ error: 'Subject with same title already exists. Choose a different title' }, 'BAD_REQUEST');

    const subject = await Subject.create(body);

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);
    return jsonResponse(subject, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
