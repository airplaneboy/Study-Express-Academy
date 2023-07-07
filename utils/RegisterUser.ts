import { fetchFormPOST } from '@/utils/fetchOption';

interface IRegister {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

const registerUser = async (props: IRegister) => {
  const path = '/api/v1/auth/register';
  return await fetchFormPOST({ path, data: props });
};

export default registerUser;
