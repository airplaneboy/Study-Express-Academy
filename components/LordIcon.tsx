'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import lottie from 'lottie-web';
import('@lordicon/element').then((mod) => mod.defineElement(lottie.loadAnimation));
// import { defineElement } from '@lordicon/element';

export const LordIcon = ({
  width = '120px',
  height = '120px',
  src,
  style,
  icon,
}: {
  width?: string;
  height?: string;
  src: string;
  style: {};
  icon: string;
}) => {
  useEffect(() => {
    const elements = document.querySelectorAll('lord-icon');

    elements.forEach((element: any) => {
      element?.addEventListener('ready', (e: any) => {
        e.srcElement.firstElementChild.hidden = true;
      });
    });

    return () => {
      elements.forEach((element: any) => {
        element?.addEventListener('ready', (e: any) => {
          e.srcElement.firstElementChild.hidden = true;
        });
      });
    };
  }, []);

  return (
    <>
      {/* @ts-ignore */}
      <lord-icon
        loading='interaction'
        src={src.startsWith('https') ? src : `https://cdn.lordicon.com/${src}.json`}
        trigger='hover'
        style={{ width, height, ...style }}>
        <Image
          width={500}
          height={500}
          alt=''
          src={icon ? icon : 'https://lordicon.com/icons/wired/outline/94-lock-unlock-morph.svg'}
        />

        {/* @ts-ignore */}
      </lord-icon>
    </>
  );
};

// #region Lord Icon Script
// export const LordIcon = ({
//   style,
//   height = '300px',
//   width = '300px',
//   src = '',
// }: {
//   style: {};
//   height?: string;
//   width?: string;
//   src: string;
// }) => {
//   return (
//     <>
//       <Script src='https://cdn.lordicon.com/lordicon-1.1.0.js'></Script>
//       {/* @ts-ignore */}
//       <lord-icon
//         src={src.startsWith('https') ? src : `https://cdn.lordicon.com/${src}.json`}
//         trigger='hover'
//         style={{ width, height, ...style }}
//       />
//     </>
//   );
// };
// #endregion
