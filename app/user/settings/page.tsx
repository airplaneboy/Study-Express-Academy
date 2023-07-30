import Notification from '@/containers/Notification';
import PersonalInformation from '@/containers/PersonalInformation';
import Profile from '@/containers/Profile';
import Separator from '@/components/Separator';
import ComboBoxContent from '@/containers/ComboBoxContent';

export default function Settings() {
  return (
    <>
      <PersonalInformation countryComboBox={<ComboBoxContent />} />

      <Separator />

      <Profile />

      <Separator />

      <Notification />
    </>
  );
}
