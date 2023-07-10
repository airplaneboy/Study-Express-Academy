import connectMongoose from '@/lib/mongooseConnect';
import Course from '@/models/Course';
import { merge } from 'lodash';

import jsonResponse from '@/utils/jsonResponse';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const courseId = params.courseId;

    if (!courseId) return jsonResponse({ error: 'Please add course id' }, 'BAD_REQUEST');

    const course = await Course.findById(courseId);

    if (!course) return jsonResponse({ error: `Course with ID ${courseId} was not found` }, 'NOT_FOUND');

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
