import connectMongoose from '@/lib/mongooseConnect';
import Unit from '@/models/Unit';
import merge from 'lodash.merge';
import jsonResponse from '@/utils/jsonResponse';
import isAlpha from 'validator/lib/isAlpha';
import mongoose from 'mongoose';
import Lesson from '@/models/Lesson';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const unitId = params.unitId;

    if (!unitId) return jsonResponse({ error: 'Please add unit id' }, 'BAD_REQUEST');

    let unit;

    mongoose.Types.ObjectId.isValid(unitId)
      ? (unit = await Unit.findById(unitId).populate({
          path: 'lessons',
          select: 'title',
          model: Lesson,
        }))
      : (unit = await Unit.findOne({ title: unitId }).populate({
          path: 'lessons',
          select: 'title',
          model: Lesson,
        }));

    if (!unit) return jsonResponse({ error: `Unit with ID ${unitId} was not found` }, 'NOT_FOUND');

    return jsonResponse(unit, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: NextRequest, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const unitId = params.unitId;

    if (!body || !unitId) return jsonResponse({ error: 'Update unit body and unitID cannot be empty' }, 'BAD_REQUEST');

    let unit = await Unit.findById(unitId);

    if (!unit) return jsonResponse({ error: 'No unit was found' }, 'NOT_FOUND');

    if (body?.title)
      if (!isAlpha(body.title, 'en-US', { ignore: ' -:' }))
        return jsonResponse(
          { error: "Unit's title can only contain alphabets and the following characters: '-' ':' " },
          'BAD_REQUEST'
        );

    unit = merge(unit, body);
    await unit.save();

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return jsonResponse(unit, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function DELETE(request: NextRequest, { params }: { params: any }) {
  try {
    await connectMongoose();
    const unitId = params.unitId;

    if (!unitId) return jsonResponse({ error: `No unit with ID: ${unitId}` }, 'NOT_FOUND');
    await Unit.findByIdAndDelete(unitId);

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return jsonResponse({ msg: 'Unit was successfully deleted' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
