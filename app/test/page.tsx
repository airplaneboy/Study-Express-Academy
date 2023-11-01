'use client';

import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Page = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <lord-icon src='https://cdn.lordicon.com/fmxcckvq.json' trigger='hover'></lord-icon>
    </div>
  );
};

export default Page;
