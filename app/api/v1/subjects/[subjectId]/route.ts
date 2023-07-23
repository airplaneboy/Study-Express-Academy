import mongoose from 'mongoose';
import connectMongoose from '@/lib/mongooseConnect';
import Subject from '@/models/Subject';
import merge from 'lodash.merge';
import Course from '@/models/Course';
import Unit from '@/models/Unit';

import jsonResponse from '@/utils/jsonResponse';
import isAlpha from 'validator/lib/isAlpha';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();

    const subjectId: string = params.subjectId;

    if (!subjectId) return jsonResponse({ error: 'Please add subject id' }, 'BAD_REQUEST');

    let subject;

    mongoose.Types.ObjectId.isValid(subjectId)
      ? (subject = await Subject.findById(subjectId).populate({
          path: 'courses',
          select: 'title units',
          model: Course,
          populate: { path: 'units', select: 'title', model: Unit },
        }))
      : (subject = await Subject.findOne({ title: subjectId }).populate({
          path: 'courses',
          select: 'title  units',
          model: Course,
          populate: { path: 'units', select: 'title ', model: Unit },
        }));

    if (!subject) return jsonResponse({ error: `Subject with ID or title "${subjectId}" was not found` }, 'NOT_FOUND');

    return jsonResponse(subject, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const subjectId = params.subjectId;

    if (!body || !subjectId)
      return jsonResponse({ error: 'Update subject body and subjectID cannot be empty' }, 'BAD_REQUEST');

    let subject = await Subject.findById(subjectId);

    if (!subject) return jsonResponse({ error: 'No subject was found' }, 'NOT_FOUND');

    if (body?.title)
      if (!isAlpha(body.title, 'en-US', { ignore: ' -:' }))
        return jsonResponse(
          { error: "Subject's title can only contain alphabets and the following characters: '-' ':' " },
          'BAD_REQUEST'
        );

    subject = merge(subject, body);
    await subject.save();
    return jsonResponse(subject, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const subjectId = params.subjectId;

    if (!subjectId) return jsonResponse({ error: `No subject with ID: ${subjectId}` }, 'NOT_FOUND');
    await Subject.findByIdAndDelete(subjectId);

    return jsonResponse({ msg: 'Subject was successfully deleted' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
