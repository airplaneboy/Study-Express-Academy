import connectMongoose from '@/lib/mongooseConnect';
import Lesson from '@/models/Lesson';
import jsonResponse from '@/utils/jsonResponse';
import merge from 'lodash.merge';
import isAlpha from 'validator/lib/isAlpha';
import mongoose from 'mongoose';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const lessonId = params.lessonId;

    if (!lessonId) return jsonResponse({ error: 'Please add lesson id' }, 'BAD_REQUEST');

    let lesson;

    mongoose.Types.ObjectId.isValid(lessonId)
      ? (lesson = await Lesson.findById(lessonId))
      : (lesson = await Lesson.findOne({ title: lessonId }));

    if (!lesson) return jsonResponse({ error: `Lesson with ID ${lessonId} was not found` }, 'NOT_FOUND');

    return jsonResponse(lesson, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const lessonId = params.lessonId;
    const body = await request.json();

    let lesson = await Lesson.findById(lessonId);
    if (!lesson) return jsonResponse({ error: `Lesson with ID ${lessonId} was not found` }, 'NOT_FOUND');

    if (body?.title)
      if (!isAlpha(body.title, 'en-US', { ignore: ' -:' }))
        return jsonResponse(
          { error: "Lesson's title can only contain alphabets and the following characters: '-' ':' " },
          'BAD_REQUEST'
        );

    lesson = merge(lesson, body);
    await lesson.save();
    return jsonResponse(lesson, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const lessonId = params.lessonId;

    if (!lessonId) return jsonResponse({ error: `No lesson with ID ${lessonId} was not found` }, 'NOT_FOUND');
    const lesson = await Lesson.findByIdAndDelete(lessonId);
    return jsonResponse({ msg: 'Lesson was successfully deleted' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
