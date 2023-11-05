/* eslint-disable @next/next/no-img-element */
'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import Image from 'next/image';

const images = [
  {
    title: 'Curious Mind',
    alt: '',
    source: '/assets/profile-pics/CuriousMind.svg',
  },
  {
    title: 'Edu Explorer',
    alt: '',
    source: '/assets/profile-pics/EduExplorer.svg',
  },
  {
    title: 'Info Quester',
    alt: '',
    source: '/assets/profile-pics/InfoQuester.svg',
  },
  {
    title: 'Knowledge Seeker',
    alt: '',
    source: '/assets/profile-pics/KnowledgeSeeker.svg',
  },
  {
    title: 'Learning Lion',
    alt: '',
    source: '/assets/profile-pics/LearningLion.svg',
  },
  {
    title: 'Study Sprint',
    alt: '',
    source: '/assets/profile-pics/StudySprint.svg',
  },
  {
    title: 'Wise Owl',
    alt: '',
    source: '/assets/profile-pics/WiseOwl.svg',
  },
];

export function Gallery({ selected, setSelected }: { selected: any; setSelected?: any }) {
  // const [selected, setSelected] = useState(images[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className='sr-only'>Avatars</RadioGroup.Label>
      <ul
        role='list'
        className='py-4 px-4 max-h-96 overflow-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-8 xl:gap-x-8'>
        {images.map((image) => (
          <RadioGroup.Option
            as='li'
            key={image.source}
            value={image}
            className={({ active, checked }) =>
              `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}
                  ${checked ? 'bg-blue-900 bg-opacity-20 text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-2xl overflow-hidden focus:outline-none `
            }>
            {({ active, checked }) => (
              <>
                <div className='flex w-full items-center justify-between relative'>
                  <div className='flex-1 items-center relative'>
                    {/*  */}
                    <div className='group block w-full aspect-w-10 aspect-h-7 bg-gray-100  overflow-hidden'>
                      <Image
                        src={image.source}
                        alt={image.alt}
                        width={200}
                        height={200}
                        style={
                          {
                            // width: '100%',
                            // height: 'auto',
                            // objectFit: 'contain',
                          }
                        }
                        className='object-cover pointer-events-none group-hover:opacity-75'
                        priority
                      />
                      <button type='button' className='absolute inset-0 focus:outline-none'>
                        <span className='sr-only'>View details for {image.title}</span>
                      </button>
                    </div>
                    <span className='mt-3 block text-xs font-bold text-white truncate pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-lg bg-opacity-40 bg-black '>
                      {image.title}
                    </span>
                    {/*  */}
                  </div>
                  {checked && (
                    <div className='shrink-0 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                      <CheckIcon className='h-6 w-6' />
                    </div>
                  )}
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </ul>
    </RadioGroup>
  );
}

export default function AvatarSelectModal({ value, setValue }: { value?: any; setValue?: any }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type='button'
        onClick={openModal}
        className=' bg-white py-2 px-3 border-2 border-gray-300 rounded-2xl  text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
        Change Avatar
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='span' className='text-lg font-medium leading-6 text-gray-900'>
                    Choose your avatar
                  </Dialog.Title>
                  <div className='mt-2'>
                    <Gallery selected={value} setSelected={setValue} />
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-2xl border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Choose
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
// ================================================================================================================================================

function CheckIcon(props: any) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#000' opacity='0.5' />
      <path d='M7 13l3 3 7-7' stroke='#fff' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
