import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import merge from 'lodash.merge';
import jsonResponse from '@/utils/jsonResponse';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';
import mongoose from 'mongoose';
import Course from '@/models/Course';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;

    if (!userId) return jsonResponse({ error: 'Please add user id or email' }, 'BAD_REQUEST');

    let user: any;
    mongoose.Types.ObjectId.isValid(userId)
      ? (user = await User.findById(userId).select(['-password', '-provider']))
      : (user = await User.findOne({ $or: [{ email: userId }, { username: userId }] })
          .select(['-password', '-provider'])
          .populate({ path: 'courses', select: '-_id title', model: Course }));

    if (!user) return jsonResponse({ error: `User with ID ${userId} was not found` }, 'NOT_FOUND');

    return jsonResponse(user, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: NextRequest, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const userId = params.userId;

    if (!body || !userId) return jsonResponse({ error: 'Update user body and userID cannot be empty' }, 'BAD_REQUEST');

    let user = await User.findById(userId).select([
      '-password',
      '-profile',
      '-provider',
      '-completedLessons',
      '-currentLesson',
      '-courses',
      '-completedCourses',
      '-achievements',
    ]);

    if (!user) return jsonResponse({ error: 'No user was found' }, 'NOT_FOUND');

    delete body?.password &&
      delete body?.profile &&
      delete body?.provider &&
      delete body?.completedCourses &&
      delete body?.currentLesson &&
      delete body?.courses &&
      delete body?.completedCourses &&
      delete body?.achievements &&
      delete body?.completedUnits;

    user = merge(user, body);
    await user.save();

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return jsonResponse(user, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function DELETE(request: NextRequest, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;

    if (!userId) return jsonResponse({ error: `No user with ID: ${userId}` }, 'NOT_FOUND');
    await User.findByIdAndDelete(userId);

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return jsonResponse({ msg: 'User was successfully deleted' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
