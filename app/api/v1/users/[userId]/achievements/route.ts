import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import Achievement from '@/models/Achievement';
import jsonResponse from '@/utils/jsonResponse';
import { NextRequest } from 'next/server';
// import { revalidatePath } from 'next/cache';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;

    if (!userId) return jsonResponse({ error: 'Please add user id' }, 'BAD_REQUEST');

    const achievement = await User.findById(userId).select('achievements');

    if (!achievement) return jsonResponse({ error: `Achievement with ID ${userId} was not found` }, 'NOT_FOUND');

    return jsonResponse(achievement, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: NextRequest, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const userId = params.userId;
    const achievementId = body.achievementId;

    if (!achievementId) return jsonResponse({ error: 'Achievement ID  cannot be empty' }, 'BAD_REQUEST');

    const user = await User.findById(userId);
    if (!user) return jsonResponse({ error: `User with ID: ${userId} not found` }, 'BAD_REQUEST');

    const achievement = await Achievement.findById(achievementId);
    if (!achievement) return jsonResponse({ error: `Achievement with ID: ${achievementId} not found` }, 'NOT_FOUND');

    if (Array.isArray(achievementId)) return jsonResponse({ error: 'achievementId cannot be an array' }, 'BAD_REQUEST');

    if (user.achievements.includes(achievementId))
      return jsonResponse({ error: 'This user has already earned this achievement' }, 'BAD_REQUEST');

    user.achievements.push(achievementId);
    await user.save();

    // const path = request.nextUrl.searchParams.get('path') || '/';
    // revalidatePath(path);

    return jsonResponse({ msg: 'Successfully added achievement to user', achievement }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
