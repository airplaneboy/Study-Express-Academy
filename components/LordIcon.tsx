'use client';

// #region Lord Icon Lottie
import lottie from 'lottie-web';
import('@lordicon/element').then((mod) => mod.defineElement(lottie.loadAnimation));
// import { defineElement } from '@lordicon/element';

export const LordIcon = ({
  width = '120px',
  height = '120px',
  src,
  style,
}: {
  width?: string;
  height?: string;
  src: string;
  style: {};
}) => {
  return (
    <>
      {/* @ts-ignore */}
      <lord-icon
        src={src.startsWith('https') ? src : `https://cdn.lordicon.com/${src}.json`}
        trigger='hover'
        style={{ width, height, ...style }}
      />
    </>
  );
};
// #endregion

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
