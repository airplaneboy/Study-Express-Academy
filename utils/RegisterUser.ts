import { fetchPOST } from '@/utils/fetchOption';

interface IRegister {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

const registerUser = async (props: IRegister) => {
  const path = 'https://study-express-academy-git-master-airplaneboys-projects.vercel.app/api/v1/auth/register';
  return await fetchPOST({ path, data: props });
};

export default registerUser;
