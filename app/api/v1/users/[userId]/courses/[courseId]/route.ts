import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import jsonResponse from '@/utils/jsonResponse';
import Course from '@/models/Course';

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const userId = params.userId;
    const courseIds = params.courseIds;

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
