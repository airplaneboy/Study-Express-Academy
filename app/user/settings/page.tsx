import Notification from '@/containers/Notification';
import PersonalInformation from '@/containers/PersonalInformation';
import Profile from '@/containers/Profile';
import Separator from '@/components/Separator';
import ChangePassword from '@/components/ChangePassword';
import { getCurrentUser } from '@/lib/data/user';
import getCountries from '@/lib/data/countries';
import orderBy from 'lodash/orderBy';

export const dynamic = 'force-dynamic';

export default async function Settings() {
  const user = await getCurrentUser();
  const countries = await getCountries();
  const countryData = countries.map((country: any) => {
    return { name: country.name.common, flag: { image: country.flags.svg, alt: country.flags.alt }, id: country.cca3 };
  });

  return (
    <>
      <PersonalInformation countries={orderBy(countryData, ['name'], ['asc'])} user={user} />
      <Separator />
      <Profile user={user} />
      <Separator />
      <Notification user={user} />
      <Separator />
      <ChangePassword userId={user?._id} />
    </>
  );
}
