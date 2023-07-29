import Notification from '@/containers/Notification';
import PersonalInformation from '@/containers/PersonalInformation';
import Profile from '@/containers/Profile';
import Separator from '@/components/Separator';

export default function Settings() {
  return (
    <>
      <PersonalInformation />

      <Separator />

      <Profile />

      <Separator />

      <Notification />
    </>
  );
}
