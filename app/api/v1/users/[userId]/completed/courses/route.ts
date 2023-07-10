import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import Course from '@/models/Course';

import jsonResponse from '@/utils/jsonResponse';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;

    if (!userId) return jsonResponse({ error: 'Please add user id' }, 'BAD_REQUEST');

    const course = await User.findById(userId).select('completedCourses');

    if (!course) return jsonResponse({ error: `Course with ID ${userId} was not found` }, 'NOT_FOUND');

    return jsonResponse(course, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const userId = params.userId;
    const courseId = body.courseId;

    if (!courseId) return jsonResponse({ error: 'Course ID  cannot be empty' }, 'BAD_REQUEST');

    const user = await User.findById(userId);
    if (!user) return jsonResponse({ error: `User with ID: ${userId} not found` }, 'BAD_REQUEST');

    const course = await Course.findById(courseId);
    if (!course) return jsonResponse({ error: `Course with ID: ${courseId} not found` }, 'NOT_FOUND');

    if (Array.isArray(courseId)) return jsonResponse({ error: 'courseId cannot be an array' }, 'BAD_REQUEST');

    if (user.completedCourses.includes(courseId))
      return jsonResponse({ error: 'This user has already completed this course' }, 'BAD_REQUEST');

    user.completedCourses.push(courseId);
    await user.save();

    return jsonResponse({ msg: 'Successfully added course to user completed courses', course }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
