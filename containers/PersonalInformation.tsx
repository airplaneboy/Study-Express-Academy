'use client';
import DatePicker from '@/components/DatePicker';
import PhoneNumberInput from '@/components/PhoneNumberInput';
import { parsePhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { updateProfile } from '@/lib/data/userProfile';
import { updateUser } from '@/lib/data/user';
import { useSession } from 'next-auth/react';
import { CgSpinnerTwo } from 'react-icons/cg';
import { format } from 'date-fns';
import PersonalInformationContext from '@/context/PersonalInformationContext';
// const countryState: { country: any; setCountry: any } = {
//   country: null,
//   setCountry: null,
// };
// export const PersonalInformationContext = React.createContext(countryState);

const PersonalInformation = ({
  countryComboBox,
  user,
}: {
  countryComboBox?: React.ReactNode;
  user: {
    username: string;
    email: string;
    profile: {
      firstName: string;
      lastName: string;
      gender: string;
      country: string;
      phone: { nationalNumber: string; number: string };
      birthday: Date;
    };
  };
}) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(user?.username);
  const [currentEmail, setCurrentEmail] = useState(user?.email);
  const [email, setEmail] = useState<any>(user?.email);
  const [gender, setGender] = useState<any>(user?.profile?.gender);
  const [firstName, setFirstName] = useState<any>(user?.profile?.firstName);
  const [lastName, setLastName] = useState<any>(user?.profile?.lastName);
  const [phoneNumber, setPhoneNumber] = useState<any>(user?.profile?.phone?.number || '');
  const [birthday, setBirthday] = useState<any>(() => {
    const date = user?.profile?.birthday ? format(new Date(user?.profile?.birthday), 'yyyy-MM-dd') : undefined;
    return { startDate: date, endDate: date };
  });
  const [country, setCountry] = useState<any>(user?.profile?.country);
  const { data: session } = useSession();

  const validateNumber = () => {
    if (!phoneNumber) return;

    const validNumber = isPossiblePhoneNumber(phoneNumber);

    if (!validNumber) {
      toast.error('Please input a valid phone number');
      return;
    }

    return parsePhoneNumber(phoneNumber);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const userUpdate: { email: string } = {
      email: email == '' ? undefined : email,
    };
    const userProfileUpdate = {
      firstName: firstName == '' ? undefined : firstName,
      lastName: lastName == '' ? undefined : lastName,
      country: country == '' ? undefined : country,
      gender: gender == '' ? undefined : gender,
      phone: validateNumber(),
      birthday: birthday == '' || birthday?.startDate == null ? undefined : birthday?.startDate,
    };

    try {
      //Update user
      if (currentEmail != userUpdate.email && JSON.stringify(userProfileUpdate) != '{}') {
        await toast.promise(
          updateUser({ data: userUpdate, userId: (session?.user as any).id }),
          {
            error: 'An error occurred. Try again or contact support',
            loading: 'Updating your email..',
            success: 'Update successful!',
          },
          { error: { duration: 1 } }
        );
        setCurrentEmail(userUpdate.email);
      }

      //Update user's profile
      if (JSON.stringify(userProfileUpdate) != '{}') {
        await toast.promise(
          updateProfile({
            data: userProfileUpdate,
            userId: (session?.user as any).id,
          }),
          {
            error: 'An error occurred. Try again or contact support',
            loading: 'Updating your profile...',
            success: 'Update successful!',
          },
          { error: { duration: 1 } }
        );
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
    }
    setLoading(false);
  };

  {
    /* Personal Information */
  }
  return (
    <div className='mt-10 sm:mt-0'>
      <div className='lg:grid lg:grid-cols-3 lg:gap-6'>
        <div className='md:col-span-1'>
          <div className='px-2 sm:px-0'>
            <span className='text-lg font-medium leading-6 text-gray-900'>Personal Information</span>
            <span className='mt-1 text-xs sm:text-sm text-gray-600 block'>
              Ensure your email, and phone number are accurate.
            </span>
          </div>
        </div>

        <div className='mt-5 md:col-span-2 lg:mt-0'>
          <form onSubmit={handleSubmit}>
            <div className=''>
              <div className='rounded-t-2xl border-x-2 border-t-2 bg-white px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                      First name
                    </label>
                    <input
                      maxLength={100}
                      value={firstName || ''}
                      onChange={(e) => setFirstName(e.target.value)}
                      type='text'
                      name='first-name'
                      id='first-name'
                      placeholder='Your given name'
                      autoComplete='given-name'
                      className='text-gray-700 mt-1 block w-full rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-sm:py-1'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='last-name' className='block text-sm font-medium text-gray-700'>
                      Last name
                    </label>
                    <input
                      maxLength={100}
                      value={lastName || ''}
                      onChange={(e) => setLastName(e.target.value)}
                      type='text'
                      name='last-name'
                      id='last-name'
                      placeholder='Your surname or family name'
                      autoComplete='family-name'
                      className='text-gray-700 mt-1 block w-full rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-sm:py-1'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3 lg:col-span-3'>
                    <label htmlFor='username' className='disabled block text-sm font-medium text-gray-700'>
                      Username
                    </label>
                    <input
                      disabled
                      maxLength={100}
                      value={username || ''}
                      onChange={(e) => setUsername(e.target.value)}
                      type='text'
                      name='username'
                      placeholder='A nickname (Unavailable)'
                      id='username'
                      autoComplete='off'
                      className='text-gray-700 disabled mt-1 block w-full rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-sm:py-1'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3 lg:col-span-3'>
                    <label htmlFor='telephone' className='block text-sm font-medium text-gray-700'>
                      Phone Number
                    </label>

                    <PhoneNumberInput value={phoneNumber || ''} setValue={setPhoneNumber} />
                  </div>
                  <div className='col-span-6 sm:col-span-4'>
                    <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                      Email address
                    </label>
                    <input
                      placeholder='Your email address'
                      maxLength={100}
                      value={email || ''}
                      onChange={(e) => setEmail(e.target.value)}
                      type='email'
                      name='email-address'
                      id='email-address'
                      autoComplete='email'
                      className='text-gray-700 mt-1 block w-full rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-sm:py-1'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                    <label htmlFor='gender' className='block text-sm font-medium text-gray-700'>
                      Gender
                    </label>
                    <select
                      className='text-gray-700 mt-1 block w-full rounded-2xl border-2 border-gray-300 bg-white px-3 text-start focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-sm:py-1'
                      value={gender || ''}
                      id='gender'
                      onChange={(e) => setGender(e.target.value)}>
                      <option value=''>Select</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>

                  <PersonalInformationContext.Provider value={{ country, setCountry }}>
                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                        Country
                      </label>
                      {countryComboBox}
                    </div>
                  </PersonalInformationContext.Provider>

                  <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                    <label htmlFor='datepicker' className='block text-sm font-medium text-gray-700'>
                      Birthday
                    </label>
                    <DatePicker value={birthday || ''} setValue={setBirthday} />
                  </div>
                </div>
              </div>
              <div className='rounded-b-2xl border-x-2 border-b-2 bg-gray-200 px-4 py-3 text-right sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center rounded-2xl border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                  <CgSpinnerTwo className={`${loading ? 'animate-spin block' : 'hidden'}  h-5 w-5 mr-3  `} />
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
