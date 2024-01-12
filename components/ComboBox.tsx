'use client';
import { Fragment, useState, useContext, useEffect } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import Image from 'next/image';
import PersonalInformationContext from '@/context/PersonalInformationContext';

export default function ComboBox({ comboBoxArray, initialSelected }: { comboBoxArray: any[]; initialSelected?: {} }) {
  const [canChangeState, setCanChangeState] = useState(false);
  const countries = comboBoxArray;
  const [selected, setSelected] = useState(initialSelected == undefined ? countries[0] : initialSelected);
  const [query, setQuery] = useState('');

  const context = useContext(PersonalInformationContext);

  useEffect(() => {
    context.setCountry(selected);
    if (selected?.name?.includes('American Samoa') && canChangeState == false) context.setCountry();

    return () => {};
  }, [context, selected, canChangeState]);

  const filteredCountries =
    query === ''
      ? countries
      : countries.filter((country) =>
          country.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className='relative mt-1' id='country'>
        <div className='text-start mt-1 block w-full px-3 border-2 border-gray-300 bg-white rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
          <div className='flex items-center gap-2 '>
            {selected && (
              <Image
                src={selected.flag.image}
                alt={selected.flag.alt}
                style={{ objectFit: 'contain', height: '20px', width: '20px' }}
                width={20}
                height={20}
              />
            )}
            <Combobox.Input
              // displayValue={(country: any) => country.name}
              className='w-full border-none py-[6px] sm:py-2 pl-0 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 '
              placeholder={selected?.name}
              onChange={(event) => {
                setCanChangeState(true);
                setQuery(event.target.value);
              }}
            />
            <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <HiChevronUpDown className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </Combobox.Button>
          </div>
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}>
          <Combobox.Options className='z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {filteredCountries.length === 0 && query !== '' ? (
              <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>Nothing found.</div>
            ) : (
              filteredCountries.map((country) => (
                <Combobox.Option
                  key={country.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    }`
                  }
                  value={country}>
                  {({ selected, active }) => (
                    <>
                      <div className='flex gap-2 items-center '>
                        <Image
                          src={country.flag.image}
                          alt={country.flag.alt}
                          style={{ objectFit: 'contain', width: '18px', height: '18px' }}
                          width={16}
                          height={16}
                        />
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {country.name}
                        </span>
                      </div>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-blue-600'
                          }`}>
                          <HiCheck className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
