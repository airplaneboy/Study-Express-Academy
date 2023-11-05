'use client';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

export default function Select({ selectOptions }: { selectOptions?: any[] }) {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className=''>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <Listbox.Button className='text-start mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
            <span className='block truncate'>{selected.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <HiChevronUpDown className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </span>
          </Listbox.Button>

          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}>
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {person.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <HiCheck className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
