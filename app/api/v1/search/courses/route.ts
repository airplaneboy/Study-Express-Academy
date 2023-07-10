import Course from '@/models/Course';
import connectMongoose from '@/lib/mongooseConnect';
import jsonResponse from '@/utils/jsonResponse';

export async function GET(request: Request) {
  try {
    await connectMongoose();
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query)
      return jsonResponse({ error: `Invalid search query: ${query}. Use 'q' as the Query Parameter` }, 'BAD_REQUEST');

    const results = await Course.find({ title: { $regex: query, $options: 'i' } });

    if (!results) return jsonResponse({ error: `There was an error searching for: ${query}` }, 'NOT_FOUND');

    return jsonResponse({ nbHits: results.length, results }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
