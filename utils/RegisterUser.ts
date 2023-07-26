import { fetchFormPOST, fetchPOST } from '@/utils/fetchOption';

interface IRegister {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

const registerUser = async (props: IRegister) => {
  const path = 'http://localhost:3000/api/v1/auth/register';
  return await fetchPOST({ path, data: props });
};

export default registerUser;
