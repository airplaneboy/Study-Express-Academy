import { fetchGET, fetchPATCH } from '@/utils/fetchOption';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

//#region Use API
export const getUser = async ({ userId }: { userId: string | null | undefined }) =>
  await fetchGET({
    path: `https://study-express-academy-git-master-airplaneboys-projects.vercel.app/api/v1/users/${userId}`,
  });

export const updateUser = async ({
  userId,
  data,
}: {
  userId: string | null | undefined;
  data: { [key: string]: any };
}) =>
  await fetchPATCH({
    data,
    path: `https://study-express-academy-git-master-airplaneboys-projects.vercel.app/api/v1/users/${userId}`,
  });

export const updateUserPassword = async ({
  userId,
  currentPassword,
  newPassword,
}: {
  userId: string | null | undefined;
  currentPassword: string;
  newPassword: string;
}) =>
  await fetchPATCH({
    data: { currentPassword, newPassword },
    path: `https://study-express-academy-git-master-airplaneboys-projects.vercel.app/api/v1/users/${userId}/password`,
  });

export default getUser;

//#endregion

//#region Current User
export const getCurrentUser = async () => {
  try {
    return await getUser({ userId: ((await getServerSession(authOptions))?.user as any)?.id });
  } catch (error) {
    console.log(error);
  }
};

export const updateCurrentUser = async ({ data }: { data: {} }) => {
  const userId = ((await getServerSession(authOptions))?.user as any)?.id;
  return await fetchPATCH({
    data,
    path: `https://study-express-academy-git-master-airplaneboys-projects.vercel.app/api/v1/users/${userId}`,
  });
};

export const updateCurrentUserPassword = async ({
  currentPassword,
  newPassword,
}: {
  currentPassword: string;
  newPassword: string;
}) => {
  const userId = ((await getServerSession(authOptions))?.user as any)?.id;
  return await fetchPATCH({
    data: { currentPassword, newPassword },
    path: `https://study-express-academy-git-master-airplaneboys-projects.vercel.app/api/v1/users/${userId}/password`,
  });
};
//#endregion
