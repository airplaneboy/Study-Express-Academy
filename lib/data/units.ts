import { fetchGET } from '@/utils/fetchOption';

const getUnits = async () => {

  const response = await fetchGET({ path: `${process.env.NEXT_PUBLIC_APP_URI}/api/v1/units` });

  const units = response?.units;

  return units;
};

export const getUnit = async ({ unitId }: { unitId: string }) =>

  await fetchGET({ path: `${process.env.NEXT_PUBLIC_APP_URI}/api/v1/units/${unitId}` });


export default getUnits;
