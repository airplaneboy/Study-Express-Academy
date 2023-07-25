import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import Lesson from '@/models/Lesson';

import jsonResponse from '@/utils/jsonResponse';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;

    if (!userId) return jsonResponse({ error: 'Please add user id' }, 'BAD_REQUEST');

    const lesson = await User.findById(userId).select('currentLesson');

    if (!lesson) return jsonResponse({ error: `Lesson with ID ${userId} was not found` }, 'NOT_FOUND');

    return jsonResponse(lesson, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: NextRequest, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const userId = params.userId;
    const lessonId = body.lessonId;

    if (!lessonId) return jsonResponse({ error: 'Lesson ID  cannot be empty' }, 'BAD_REQUEST');

    const user = await User.findById(userId);
    if (!user) return jsonResponse({ error: `User with ID: ${userId} not found` }, 'BAD_REQUEST');

    const lesson = await Lesson.findById(lessonId);
    if (!lesson) return jsonResponse({ error: `Lesson with ID: ${lessonId} not found` }, 'NOT_FOUND');

    if (Array.isArray(lessonId)) return jsonResponse({ error: 'lessonId cannot be an array' }, 'BAD_REQUEST');

    if (user.currentLesson == lessonId)
      return jsonResponse({ error: 'User is currently working on this lesson' }, 'BAD_REQUEST');

    user.currentLesson = lessonId;
    await user.save();

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return jsonResponse({ msg: 'Successfully updated current lesson', lesson }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
