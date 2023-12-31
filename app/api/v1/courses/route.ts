import connectMongoose from '@/lib/mongooseConnect';
import Course from '@/models/Course';
import jsonResponse from '@/utils/jsonResponse';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';
import isAlpha from 'validator/lib/isAlpha';

export async function GET() {
  await connectMongoose();
  const courses = await Course.find({});
  if (!courses) return jsonResponse({ error: 'There was an error' }, 'NOT_FOUND');

  return jsonResponse({ nbHits: courses.length, courses }, 'OK');
}

export async function POST(request: NextRequest) {
  try {
    await connectMongoose();

    const body = await request.json();

    const { title, description, instructor, subject, level } = body;

    if (!title || !description || !instructor || !subject || !level)
      return jsonResponse({ error: 'Course needs title, description, level, and instructor' }, 'BAD_REQUEST');

    if (!isAlpha(title, 'en-US', { ignore: ' -:' }))
      return jsonResponse(
        { error: "Course's title can only contain alphabets and the following characters: '-' ':' " },
        'BAD_REQUEST'
      );

    if (await Course.findOne({ title }))
      return jsonResponse({ error: 'Course with same title already exists. Choose a different title' }, 'BAD_REQUEST');

    const course = await Course.create(body);

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return jsonResponse(course, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
