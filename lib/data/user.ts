import { fetchGET, fetchPATCH } from '@/utils/fetchOption';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

//#region Use API
export const getUser = async ({ userId }: { userId: string | null | undefined }) =>
  await fetchGET({ path: `http://localhost:3000/api/v1/users/${userId}`, cache: true });

export const updateUser = async ({
  userId,
  data,
}: {
  userId: string | null | undefined;
  data: { [key: string]: any };
}) => await fetchPATCH({ data, path: `http://localhost:3000/api/v1/users/${userId}` });

export default getUser;

//#endregion

//#region Get Current User
export const getCurrentUser = async () => {
  try {
    return await getUser({ userId: ((await getServerSession(authOptions))?.user as any)?.id });
  } catch (error) {
    console.log(error);
  }
};
//#endregion
