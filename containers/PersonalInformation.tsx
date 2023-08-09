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

const countryState: { country: any; setCountry: any } = {
  country: null,
  setCountry: null,
};
export const PersonalInformationContext = React.createContext(countryState);

const PersonalInformation = ({ countryComboBox }: { countryComboBox?: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState<any>();
  const [firstName, setFirstName] = useState<any>();
  const [lastName, setLastName] = useState<any>();
  const [username, setUsername] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>('');
  const [birthday, setBirthday] = useState<any>();
  const [country, setCountry] = useState<any>();
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
      if (JSON.stringify(userUpdate) !== '{}') {
        await toast.promise(
          updateUser({ data: userUpdate, userId: (session?.user as any).id }),
          {
            error: 'An error occurred. Try again or contact support',
            loading: 'Updating your email..',
            success: 'Update successful!',
          },
          { error: { duration: 1 } }
        );
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

  return (
    <PersonalInformationContext.Provider value={{ country, setCountry }}>
      {/* Personal Information */}
      <div className='mt-10 sm:mt-0'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>Personal Information</h3>
              <p className='mt-1 text-sm text-gray-600'>Ensure your email, and phone number are accurate.</p>
            </div>
          </div>

          <div className='mt-5 md:col-span-2 md:mt-0'>
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
                        className='mt-1 block w-full rounded-2xl border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
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
                        className='mt-1 block w-full rounded-2xl border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
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
                        className='disabled mt-1 block w-full rounded-2xl border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
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
                        className='mt-1 block w-full rounded-2xl border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                      <label htmlFor='gender' className='block text-sm font-medium text-gray-700'>
                        Gender
                      </label>
                      <select
                        className='mt-1 block w-full rounded-2xl border-2 border-gray-300 bg-white px-3 text-start focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                        value={gender || ''}
                        id='gender'
                        onChange={(e) => setGender(e.target.value)}>
                        <option value=''>Select</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                        Country
                      </label>
                      {countryComboBox}
                    </div>

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
                    className='inline-flex justify-center rounded-2xl border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    <CgSpinnerTwo className={`${loading ? 'animate-spin block' : 'hidden'}  h-5 w-5 mr-3  `} />
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PersonalInformationContext.Provider>
  );
};

export default PersonalInformation;
