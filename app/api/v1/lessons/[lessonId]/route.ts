import connectMongoose from '@/lib/mongooseConnect';
import Lesson from '@/models/Lesson';
import jsonResponse from '@/utils/jsonResponse';
import { merge } from 'lodash';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const lessonId = params.lessonId;

    const lesson = await Lesson.findById(lessonId);
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

    const lesson = await Lesson.findByIdAndDelete(lessonId);
    if (!lesson) return jsonResponse({ error: `Lesson with ID ${lessonId} was not found` }, 'NOT_FOUND');
    return jsonResponse({ msg: 'Lesson was successfully deleted' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
