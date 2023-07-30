'use client';
import PhoneInput from '@/components/PhoneInput';
import PhoneNumberInput from '@/components/PhoneNumberInput';
import React, { useState } from 'react';

const PersonalInformation = ({ countryComboBox }: { countryComboBox?: React.ReactNode }) => {
  const [gender, setGender] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(
      `Gender: ${gender}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nUsername: ${username}\nEmail: ${email}\nPhone Number: ${phoneNumber}`
    );
  };

  return (
    <>
      {/* Personal Information */}
      <div className='mt-10 sm:mt-0'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>Personal Information</h3>
              <p className='mt-1 text-sm text-gray-600'>Ensure your email, and phone number are accurate</p>
            </div>
          </div>

          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form onSubmit={handleSubmit}>
              <div className=''>
                <div className='px-4 py-5 bg-white sm:p-6 rounded-t-2xl border-x-2 border-t-2'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                        First name
                      </label>
                      <input
                        maxLength={100}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-2xl'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='last-name' className='block text-sm font-medium text-gray-700'>
                        Last name
                      </label>
                      <input
                        maxLength={100}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-2xl'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3 lg:col-span-3'>
                      <label htmlFor='region' className='block text-sm font-medium text-gray-700'>
                        Username
                      </label>
                      <input
                        maxLength={100}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type='text'
                        name='username'
                        id='username'
                        autoComplete='off'
                        className='mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-2xl'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3 lg:col-span-3'>
                      <label htmlFor='postal-code' className='block text-sm font-medium text-gray-700'>
                        Phone Number
                      </label>

                      <PhoneNumberInput value={phoneNumber} setValue={setPhoneNumber} />
                    </div>
                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                        Email address
                      </label>
                      <input
                        maxLength={100}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='text'
                        name='email-address'
                        id='email-address'
                        autoComplete='email'
                        className='mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-2xl'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                      <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                        Gender
                      </label>
                      <select
                        className='text-start mt-1 block w-full px-3 border-2 border-gray-300 bg-white rounded-2xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}>
                        <option value=''>Select</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                        Country
                      </label>
                      {countryComboBox}
                    </div>

                    <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                      <label htmlFor='city' className='block text-sm font-medium text-gray-700'>
                        City
                      </label>
                      <input
                        maxLength={100}
                        type='text'
                        name='city'
                        id='city'
                        autoComplete='address-level2'
                        className='mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-2xl'
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-200 text-right sm:px-6 rounded-b-2xl border-x-2 border-b-2'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
