import { fetchGET } from '@/utils/fetchOption';

export const getUser = async ({ userId }: { userId: string }) => {
  const user = await fetchGET({ path: `http://localhost:3000/api/v1/users/${userId}` });
  return user;
};

export default getUser;
