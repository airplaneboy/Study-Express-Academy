import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import { merge } from 'lodash';
import jsonResponse from '@/utils/jsonResponse';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;

    if (!userId) return jsonResponse({ error: 'Please add user id' }, 'BAD_REQUEST');

    const user = await User.findById(userId).select(['-password', '-provider']);

    if (!user) return jsonResponse({ error: `User with ID ${userId} was not found` }, 'NOT_FOUND');

    return jsonResponse(user, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: Request, { params }: { params: any }) {
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
      '-enrolledCourses',
      '-completedCourses',
      '-achievements',
    ]);

    if (!user) return jsonResponse({ error: 'No user was found' }, 'NOT_FOUND');

    delete body?.password &&
      delete body?.profile &&
      delete body?.provider &&
      delete body?.completedCourses &&
      delete body?.currentLesson &&
      delete body?.enrolledCourses &&
      delete body?.completedCourses &&
      delete body?.achievements;

    user = merge(user, body);
    await user.save();
    return jsonResponse(user, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;

    if (!userId) return jsonResponse({ error: `No user with ID: ${userId}` }, 'NOT_FOUND');
    await User.findByIdAndDelete(userId);

    return jsonResponse({ msg: 'User was successfully deleted' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
