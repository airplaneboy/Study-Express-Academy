import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import jsonResponse from '@/utils/jsonResponse';
// import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function PATCH(request: NextRequest, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const userId = params.userId;

    const { currentPassword, newPassword } = body;
    if (!currentPassword || !newPassword)
      return jsonResponse(
        { error: 'Input the new (newPassword) and current (currentPassword) passwords' },
        'BAD_REQUEST'
      );

    let user = await User.findById(userId).select('password');

    if (!user) return jsonResponse({ error: 'No user was found' }, 'NOT_FOUND');

    if (!(await user.verifyPassword(currentPassword)))
      return jsonResponse({ error: 'Incorrect current password' }, 'BAD_REQUEST');

    user.password = newPassword;
    await user.save();

    // const path = request.nextUrl.searchParams.get('path') || '/';
    // revalidatePath(path);

    return jsonResponse({ msg: 'Password successfully updated' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
