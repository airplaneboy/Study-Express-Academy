import { fetchPATCH, fetchGET } from '@/utils/fetchOption';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const getProfile = async ({ userId }: { userId: string }) => {

  const response = await fetchGET({ path: `${process.env.NEXT_PUBLIC_APP_URI}/api/v1/users/${userId}/profile` });

  return response?.profile;
};

export const updateProfile = async ({ userId, data }: { userId: any; data: { [key: string]: any } }) => {
  const response = await fetchPATCH({

    path: `${process.env.NEXT_PUBLIC_APP_URI}/api/v1/users/${userId}/profile`,

    data,
  });
  return response?.user?.profile;
};

export default getProfile;

//#region User Profile
export const getCurrentProfile = async () => {
  try {
    return await getProfile({ userId: ((await getServerSession(authOptions))?.user as any)?.id });
  } catch (error) {
    console.log(error);
  }
};
//#endregion
