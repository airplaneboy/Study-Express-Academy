import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import merge from 'lodash.merge';
import jsonResponse from '@/utils/jsonResponse';
import mongoose from 'mongoose';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;

    if (!userId) return jsonResponse({ error: 'Please add user id' }, 'BAD_REQUEST');

    let profile;

    mongoose.Types.ObjectId.isValid(userId)
      ? (profile = await User.findById(userId).select('profile'))
      : (profile = await User.findOne({ $or: [{ email: userId }, { username: userId }] }).select('profile'));

    if (!profile)
      return jsonResponse({ error: `Profile with ID, username, or email ${userId} was not found` }, 'NOT_FOUND');

    return jsonResponse(profile, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const userId = params.userId;

    if (!body || !userId)
      return jsonResponse({ error: 'Update user body and courseID cannot be empty' }, 'BAD_REQUEST');

    let user;
    mongoose.Types.ObjectId.isValid(userId)
      ? (user = await User.findById(userId).select('profile'))
      : (user = await User.findOne({ $or: [{ email: userId }, { username: userId }] }).select('profile'));

    if (!user) return jsonResponse({ error: 'No user was found' }, 'NOT_FOUND');

    user.profile = merge(user.profile, body);
    await user.save();

    return jsonResponse({ msg: 'Successfully updated profile', user }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
