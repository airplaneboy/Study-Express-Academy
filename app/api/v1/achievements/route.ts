import connectMongoose from '@/lib/mongooseConnect';
import Achievement from '@/models/Achievement';
import jsonResponse from '@/utils/jsonResponse';
import isAlpha from 'validator/lib/isAlpha';

export async function GET(request: Request) {
  await connectMongoose();
  const achievements = await Achievement.find({});

  if (!achievements) return jsonResponse({ error: 'There was an error' }, 'BAD_REQUEST');

  return jsonResponse({ nbHits: achievements.length, achievements }, 'OK');
}

export async function POST(request: Request) {
  try {
    await connectMongoose();
    const body = await request.json();
    const { title, description, requirement } = body;

    if (!title || !description || !requirement)
      return jsonResponse({ error: 'Achievement title, description, and requirement is required' }, 'BAD_REQUEST');

    if (!isAlpha(title, 'en-US', { ignore: ' -:' }))
      return jsonResponse(
        { error: "Achievement's title can only contain alphabets and the following characters: '-' ':' " },
        'BAD_REQUEST'
      );

    if (await Achievement.findOne({ title }))
      return jsonResponse(
        { error: 'Achievement with same title already exists. Choose a different title' },
        'BAD_REQUEST'
      );

    const achievement = await Achievement.create(body);

    return jsonResponse({ msg: 'Successfully created achievement', achievement: achievement }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
