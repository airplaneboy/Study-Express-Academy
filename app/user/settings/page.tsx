import Notification from '@/containers/Notification';
import PersonalInformation from '@/containers/PersonalInformation';
import Profile from '@/containers/Profile';
import Separator from '@/components/Separator';
import ComboBoxContent from '@/containers/ComboBoxContent';
import { getCurrentUser } from '@/lib/data/user';

export const dynamic = 'force-dynamic';

export default async function Settings() {
  const user = await getCurrentUser();

  return (
    <>
      <PersonalInformation
        user={user}
        countryComboBox={
          <ComboBoxContent
            initialSelected={
              user?.profile?.country || {
                name: 'Select Country',
                flag: { image: '/assets/icons8-expand-arrow-48.png' },
              }
            }
          />
        }
      />

      <Separator />

      <Profile user={user} />

      <Separator />

      <Notification user={user} />
    </>
  );
}
