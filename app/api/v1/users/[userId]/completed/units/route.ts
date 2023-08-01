import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import Unit from '@/models/Unit';

import jsonResponse from '@/utils/jsonResponse';
// import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;

    if (!userId) return jsonResponse({ error: 'Please add user id' }, 'BAD_REQUEST');

    const unit = await User.findById(userId).select('completedUnits');

    if (!unit) return jsonResponse({ error: `Unit with user ID ${userId} was not found` }, 'NOT_FOUND');

    return jsonResponse(unit, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: NextRequest, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const userId = params.userId;
    const unitId = body.unitId;

    if (!unitId) return jsonResponse({ error: 'Unit ID  cannot be empty' }, 'BAD_REQUEST');

    const user = await User.findById(userId);
    if (!user) return jsonResponse({ error: `User with ID: ${userId} not found` }, 'BAD_REQUEST');

    const unit = await Unit.findById(unitId);
    if (!unit) return jsonResponse({ error: `Unit with ID: ${unitId} not found` }, 'NOT_FOUND');

    if (Array.isArray(unitId)) return jsonResponse({ error: 'unitId cannot be an array' }, 'BAD_REQUEST');

    if (user?.completedUnits.includes(unitId))
      return jsonResponse({ error: 'This user has already completed this unit' }, 'BAD_REQUEST');

    user.completedUnits.push(unitId);
    await user.save();

    // const path = request.nextUrl.searchParams.get('path') || '/';
    // revalidatePath(path);

    return jsonResponse({ msg: 'Successfully added unit to user completed units', unit }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
