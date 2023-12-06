'use client';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

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
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
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
                <Dialog.Panel className='w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white/50 backdrop-blur p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='text-xl font-extrabold  leading-6 text-gray-800 capitalize truncate'>
                    {header}
                  </Dialog.Title>
                  <div id='add-subject' className='mt-2 max-h-[55vh] overflow-y-scroll'>
                    {children}
                  </div>

                  <div className='pt-4 border-t border-gray-300 flex items-center justify-between'>
                    {footer || (
                      <>
                        <div></div>
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
