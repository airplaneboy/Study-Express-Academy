import connectMongoose from '@/lib/mongooseConnect';
import User from '@/models/User';
import jsonResponse from '@/utils/jsonResponse';

export async function PATCH(request: Request, { params }: { params: any }) {
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
      return jsonResponse({ error: 'Input does not match the current password' }, 'BAD_REQUEST');

    user.password = newPassword;
    await user.save();

    return jsonResponse({ msg: 'Password successfully updated' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
