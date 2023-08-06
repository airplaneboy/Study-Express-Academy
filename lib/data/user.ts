import { fetchGET, fetchPATCH } from '@/utils/fetchOption';

export const getUser = async ({ userId }: { userId: string | null | undefined }) =>
  await fetchGET({ path: `http://localhost:3000/api/v1/users/${userId}`, cache: false });

export const updateUser = async ({
  userId,
  data,
}: {
  userId: string | null | undefined;
  data: { [key: string]: any };
}) => await fetchPATCH({ data, path: `http://localhost:3000/api/v1/users/${userId}` });

export default getUser;
