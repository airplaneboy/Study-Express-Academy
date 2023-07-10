import connectMongoose from '@/lib/mongooseConnect';
import Achievement from '@/models/Achievement';
import jsonResponse from '@/utils/jsonResponse';
import { merge } from 'lodash';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const achievementId = params.achievementId;

    const achievement = await Achievement.findById(achievementId);
    if (!achievement) return jsonResponse({ error: `achievement with ID ${achievementId} was not found` }, 'NOT_FOUND');

    return jsonResponse(achievement, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const achievementId = params.achievementId;
    const body = await request.json();

    let achievement = await Achievement.findById(achievementId);
    if (!achievement) return jsonResponse({ error: `achievement with ID ${achievementId} was not found` }, 'NOT_FOUND');
    achievement = merge(achievement, body);
    await achievement.save();
    return jsonResponse(achievement, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const achievementId = params.achievementId;

    const achievement = await Achievement.findByIdAndDelete(achievementId);
    if (!achievement) return jsonResponse({ error: `achievement with ID ${achievementId} was not found` }, 'NOT_FOUND');
    return jsonResponse({ msg: 'achievement was successfully deleted' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
