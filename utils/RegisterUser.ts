import { fetchPOST } from '@/utils/fetchOption';

interface IRegister {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

const registerUser = async (props: IRegister) => {

  const path = `${process.env.NEXT_PUBLIC_APP_URI}/api/v1/auth/register`;

  return await fetchPOST({ path, data: props });
};

export default registerUser;
