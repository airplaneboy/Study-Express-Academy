import connectMongoose from '@/lib/mongooseConnect';
import Lesson from '@/models/Lesson';
import jsonResponse from '@/utils/jsonResponse';

export async function GET(request: Request) {
  connectMongoose();
  const lessons = await Lesson.find({});

  if (!lessons) return jsonResponse({ error: 'There was an error' }, 'BAD_REQUEST');

  return jsonResponse({ nbHits: lessons.length, lessons }, 'OK');
}

export async function POST(request: Request) {
  try {
    await connectMongoose();
    const body = await request.json();
    const { title, description, courseId } = body;

    if (!title || !description || !courseId)
      return jsonResponse({ error: 'Lesson title, description, and courseId is required' }, 'BAD_REQUEST');

    if (await Lesson.findOne({ title }))
      return jsonResponse({ error: 'Lesson with same title already exists. Choose a different title' }, 'BAD_REQUEST');

    const lesson = await Lesson.create({ ...body, course: courseId });

    return jsonResponse({ msg: 'Successfully created lesson', lesson }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
