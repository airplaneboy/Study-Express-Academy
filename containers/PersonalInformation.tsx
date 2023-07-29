import ComboBoxContent from './ComboBoxContent';

const PersonalInformation = async () => {
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
            <form action='#' method='POST'>
              <div className=''>
                <div className='px-4 py-5 bg-white sm:p-6 rounded-t-2xl border-x-2 border-t-2'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                        First name
                      </label>
                      <input
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
                      <input
                        type='tel'
                        name='telephone'
                        id='telephone'
                        autoComplete='Phone'
                        className='mt-1 focus:ring-indigo-500 border-2 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-2xl'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                        Email address
                      </label>
                      <input
                        type='text'
                        name='email-address'
                        id='email-address'
                        autoComplete='email'
                        className='mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-2xl'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                        Country
                      </label>
                      <ComboBoxContent />
                    </div>

                    <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                      <label htmlFor='city' className='block text-sm font-medium text-gray-700'>
                        City
                      </label>
                      <input
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
