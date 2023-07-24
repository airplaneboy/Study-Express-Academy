import connectMongoose from '@/lib/mongooseConnect';
import Course from '@/models/Course';
import merge from 'lodash.merge';
import mongoose from 'mongoose';
import jsonResponse from '@/utils/jsonResponse';
import isAlpha from 'validator/lib/isAlpha';
import Lesson from '@/models/Lesson';
import Unit from '@/models/Unit';
import Subject from '@/models/Subject';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();

    const courseId = params.courseId;

    if (!courseId) return jsonResponse({ error: 'Please add course id' }, 'BAD_REQUEST');

    let course;

    mongoose.Types.ObjectId.isValid(courseId)
      ? (course = await Course.findById(courseId).populate({
          path: 'units',
          select: 'title lessons',
          model: Unit,
          populate: { path: 'lessons', select: 'title', model: Lesson },
        }))
      : (course = await Course.findOne({ title: courseId })
          .populate({
            path: 'units',
            select: 'title lessons',
            model: Unit,
            populate: { path: 'lessons', select: 'title', model: Lesson },
          })
          .populate({ path: 'subject', select: 'title', model: Subject }));

    if (!course) return jsonResponse({ error: `Course with ID or title "${courseId}" was not found` }, 'NOT_FOUND');

    return jsonResponse(course, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const courseId = params.courseId;

    if (!body || !courseId)
      return jsonResponse({ error: 'Update course body and courseID cannot be empty' }, 'BAD_REQUEST');

    let course = await Course.findById(courseId);

    if (!course) return jsonResponse({ error: 'No course was found' }, 'NOT_FOUND');

    if (body?.title)
      if (!isAlpha(body.title, 'en-US', { ignore: ' -:' }))
        return jsonResponse(
          { error: "Course's title can only contain alphabets and the following characters: '-' ':' " },
          'BAD_REQUEST'
        );

    course = merge(course, body);
    await course.save();
    return jsonResponse(course, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const courseId = params.courseId;

    if (!courseId) return jsonResponse({ error: `No course with ID: ${courseId}` }, 'NOT_FOUND');
    await Course.findByIdAndDelete(courseId);

    return jsonResponse({ msg: 'Course was successfully deleted' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
