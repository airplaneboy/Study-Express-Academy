import connectMongoose from '@/lib/mongooseConnect';
import Lesson from '@/models/Lesson';
import jsonResponse from '@/utils/jsonResponse';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const courseId = params.courseId;
    const lessons = await Lesson.find({ course: courseId });
    if (!lessons) return jsonResponse({ error: `Lessons with course ID ${courseId} was not found` }, 'NOT_FOUND');
    return jsonResponse({ lessons, nbHits: lessons.length }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
