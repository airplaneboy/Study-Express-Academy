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

    const lessons = await User.findById(userId).select('completedLessons');

    if (!lessons) return jsonResponse({ error: `Lesson with ID ${userId} was not found` }, 'NOT_FOUND');

    return jsonResponse(lessons, 'OK');
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

    const lessons = await Lesson.findById(lessonId);
    if (!lessons) return jsonResponse({ error: `Lesson with ID: ${lessonId} not found` }, 'NOT_FOUND');

    if (Array.isArray(lessonId)) return jsonResponse({ error: 'lessonId cannot be an array' }, 'BAD_REQUEST');

    if (user.completedLessons.includes(lessonId))
      return jsonResponse({ error: 'This user has already completed this lessons' }, 'BAD_REQUEST');

    user.completedLessons.push(lessonId);
    await user.save();

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return jsonResponse({ msg: 'Successfully added lessons to user completed lessons', lessons }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
