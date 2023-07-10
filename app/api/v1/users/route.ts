import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import jsonResponse from '@/utils/jsonResponse';

export async function GET() {
  await connectMongoose();
  const users = await User.find({}).select(['-password', '-provider']);
  if (!users) return jsonResponse({ error: 'There was an error' }, 'NOT_FOUND');

  return jsonResponse({ nbHits: users.length, users }, 'OK');
}
