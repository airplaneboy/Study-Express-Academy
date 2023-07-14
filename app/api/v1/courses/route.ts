import connectMongoose from '@/lib/mongooseConnect';
import Course from '@/models/Course';
import jsonResponse from '@/utils/jsonResponse';

export async function GET() {
  await connectMongoose();
  const courses = await Course.find({});
  if (!courses) return jsonResponse({ error: 'There was an error' }, 'NOT_FOUND');

  return jsonResponse({ nbHits: courses.length, courses }, 'OK');
}

export async function POST(request: Request) {
  try {
    await connectMongoose();

    const body = await request.json();

    const { title, description, instructor, subject, level } = body;

    if (!title || !description || !instructor || !subject || !level)
      return jsonResponse({ error: 'Course needs title, description, level, and instructor' }, 'BAD_REQUEST');

    if (await Course.findOne({ title }))
      return jsonResponse({ error: 'Course with same title already exists. Choose a different title' }, 'BAD_REQUEST');

    const course = await Course.create(body);

    return jsonResponse(course, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
