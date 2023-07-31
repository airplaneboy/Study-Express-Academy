import { fetchPATCH, fetchGET } from '@/utils/fetchOption';

const getProfile = async ({ userId }: { userId: string }) => {
  const response = await fetchGET({ path: `http://localhost:3000/api/v1/users/${userId}/profile` });
  return response?.profile;
};

export const updateProfile = async ({ userId, data }: { userId: any; data: { [key: string]: any } }) => {
  const response = await fetchPATCH({ path: `http://localhost:3000/api/v1/users/${userId}/profile`, data });
  return response?.user?.profile;
};

export default getProfile;
