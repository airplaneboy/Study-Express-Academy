'use client';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';

export default function Modal({
  header,
  footer,
  children,
  buttonName = 'Open',
  className = '',
  footerButton,
}: {
  header: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  buttonName: any;
  className?: string;
  footerButton?: { click: () => void; text?: string; className?: string };
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type='button' onClick={openModal} className={className}>
        {buttonName}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-20 ' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto max-h-screen'>
            <div className='flex min-h-full items-center justify-center p-0 sm:p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='max-sm:pt-4 w-full max-w-4xl transform overflow-hidden sm:rounded-2xl bg-white/90 backdrop-blur-sm  py-6 sm:px-6 text-left align-middle shadow-xl transition-all h-screen sm:h-auto rounded-none'>
                  <Dialog.Title
                    as='h3'
                    className='text-xl font-extrabold flex items-center justify-between leading-6 text-gray-800 capitalize truncate px-2'>
                    {header}
                    <HiXMark onClick={() => closeModal()} size={24} className='text-gray-500 mr-2 cursor-pointer' />
                  </Dialog.Title>
                  <div
                    id='add-subject'
                    className='mt-4 sm:mt-2 max-h-[calc(100vh-56px-56px-10px)] sm:max-h-[55vh] overflow-y-scroll  shadow-inner sm:shadow-none shadow-gray-300 sm:border-none'>
                    {children}
                  </div>

                  <div className='pt-4 border-t border-gray-300 flex items-center justify-center sm:justify-between'>
                    {footer || (
                      <>
                        <div className='hidden sm:block'></div>
                        <button
                          type='button'
                          className={
                            footerButton?.className ||
                            'inline-flex justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-sm font-medium text-blue-100 hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                          }
                          onClick={() => {
                            footerButton?.click();
                            closeModal();
                          }}>
                          {footerButton?.text || 'Continue'}
                        </button>
                      </>
                    )}
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
