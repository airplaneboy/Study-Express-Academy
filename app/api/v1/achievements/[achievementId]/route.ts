import connectMongoose from '@/lib/mongooseConnect';
import Achievement from '@/models/Achievement';
import jsonResponse from '@/utils/jsonResponse';
import merge from 'lodash.merge';
import isAlpha from 'validator/lib/isAlpha';
import mongoose from 'mongoose';
import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const achievementId = params.achievementId;

    if (!achievementId) return jsonResponse({ error: 'Please add achievement id' }, 'BAD_REQUEST');

    let achievement;

    mongoose.Types.ObjectId.isValid(achievementId)
      ? (achievement = await Achievement.findById(achievementId))
      : (achievement = await Achievement.findOne({ title: achievementId }));

    if (!achievement)
      return jsonResponse({ error: `Achievement with ID or title "${achievementId}" was not found` }, 'NOT_FOUND');

    if (!achievement) return jsonResponse({ error: `achievement with ID ${achievementId} was not found` }, 'NOT_FOUND');

    return jsonResponse(achievement, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: NextRequest, { params }: { params: any }) {
  try {
    await connectMongoose();
    const achievementId = params.achievementId;
    const body = await request.json();

    let achievement = await Achievement.findById(achievementId);
    if (!achievement) return jsonResponse({ error: `achievement with ID ${achievementId} was not found` }, 'NOT_FOUND');

    if (body?.title)
      if (!isAlpha(body.title, 'en-US', { ignore: ' -:' }))
        return jsonResponse(
          { error: "Achievement's title can only contain alphabets and the following characters: '-' ':' " },
          'BAD_REQUEST'
        );

    achievement = merge(achievement, body);
    await achievement.save();

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return jsonResponse(achievement, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function DELETE(request: NextRequest, { params }: { params: any }) {
  try {
    await connectMongoose();
    const achievementId = params.achievementId;

    const achievement = await Achievement.findByIdAndDelete(achievementId);
    if (!achievement) return jsonResponse({ error: `achievement with ID ${achievementId} was not found` }, 'NOT_FOUND');

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return jsonResponse({ msg: 'achievement was successfully deleted' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
