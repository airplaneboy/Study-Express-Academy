import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import jsonResponse from '@/utils/jsonResponse';
import Course from '@/models/Course';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;

    if (!userId) return jsonResponse({ error: 'Please add user id' }, 'BAD_REQUEST');

    const courses = await User.findById(userId).select('courses');

    if (!courses) return jsonResponse({ error: `User with ID ${userId} was not found` }, 'NOT_FOUND');

    return jsonResponse({ nbHits: courses.length, courses }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const userId = params.userId;
    const courseIds = body.courseIds;

    if (!body || !userId) return jsonResponse({ error: 'Update user ID and courseIDs cannot be empty' }, 'BAD_REQUEST');

    let user = await User.findById(userId);

    if (!user) return jsonResponse({ error: 'No user was found' }, 'NOT_FOUND');

    if (!Array.isArray(courseIds)) return jsonResponse({ error: 'courseIds takes an array' }, 'BAD_REQUEST');

    const errors = [];
    for (const courseId of courseIds) {
      const course = await Course.findById(courseId).catch((err) => {
        errors.push(err.message);
      });

      if (!course) {
        continue;
      }
      if (user.courses.includes(courseId)) {
        errors.push(`msg: User is already enrolled to course with ID: ${courseId} (${course.title})`);
        continue;
      }
      user.courses.push(courseId);
    }

    await user.save();
    return jsonResponse({ msg: 'Successfully enrolled to course', errors }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const userId = params.userId;
    const courseIds = body.courseIds;

    const user = await User.findById(userId);
    if (!user) return jsonResponse({ error: `No user with ID: ${userId}` }, 'NOT_FOUND');

    if (!Array.isArray(courseIds)) return jsonResponse({ error: 'courseIds takes an array' }, 'BAD_REQUEST');

    const errors = [];
    for (const courseId of courseIds) {
      const course = await Course.findById(courseId).catch((err) => {
        errors.push(err.message);
      });

      if (!course) {
        continue;
      }

      if (!user.courses.includes(courseId)) {
        errors.push(`msg: User is not enrolled to course with ID: ${courseId} (${course.title})`);
        continue;
      }

      user.courses.pull(courseId);
    }
    await user.save();

    return jsonResponse({ msg: 'Successfully removed user from course(s)', errors }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
