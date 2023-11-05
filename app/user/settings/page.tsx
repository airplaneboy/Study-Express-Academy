import Notification from '@/containers/Notification';
import PersonalInformation from '@/containers/PersonalInformation';
import Profile from '@/containers/Profile';
import Separator from '@/components/Separator';
import ComboBoxContent from '@/containers/ComboBoxContent';
import { getCurrentUser } from '@/lib/data/user';

export default async function Settings() {
  const user = await getCurrentUser();

  return (
    <>
      <PersonalInformation user={user} countryComboBox={<ComboBoxContent initialSelected={user?.profile?.country} />} />

      <Separator />

      <Profile user={user} />

      <Separator />

      <Notification user={user} />
    </>
  );
}
