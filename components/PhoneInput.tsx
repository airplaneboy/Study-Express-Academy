import PhoneInput2 from 'react-phone-input-2';
// import startsWith from 'lodash/startswith';
import 'react-phone-input-2/lib/material.css';

const PhoneInput = ({ phone, setPhone }: { phone?: any; setPhone?: any }) => {
  return (
    <PhoneInput2
      inputProps={{ maxLength: '20', type: 'tel', name: 'telephone', id: 'telephone', autoComplete: 'Phone' }}
      inputClass='!h-auto !py-2 focus:!ring-blue-500 !border-2 focus:!border-blue-500 !block !w-full sm:!text-sm !text-gray-700 !border-gray-300 !rounded-2xl '
      buttonClass=''
      containerClass=''
      dropdownClass='hover:bg-blue-700'
      specialLabel=''
      country={'ng'}
      value={phone}
      countryCodeEditable={false}
      onChange={(phone) => setPhone(phone)}
    />
  );
};

export default PhoneInput;
