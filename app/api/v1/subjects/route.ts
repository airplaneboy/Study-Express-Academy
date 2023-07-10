import connectMongoose from '@/lib/mongooseConnect';
import Subject from '@/models/Subject';
import jsonResponse from '@/utils/jsonResponse';

export async function GET() {
  await connectMongoose();
  const subjects = await Subject.find({});
  if (!subjects) return jsonResponse({ error: 'There was an error' }, 'NOT_FOUND');

  return jsonResponse({ nbHits: subjects.length, subjects }, 'OK');
}

export async function POST(request: Request) {
  try {
    await connectMongoose();
    const body = await request.json();

    const { title, description } = body;

    if (!title || !description) return jsonResponse({ error: 'Subject needs title, and description' }, 'BAD_REQUEST');

    if (await Subject.findOne({ title }))
      return jsonResponse({ error: 'Subject with same title already exists. Choose a different title' }, 'BAD_REQUEST');

    const subject = await Subject.create(body);

    return jsonResponse(subject, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
