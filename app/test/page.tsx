'use client';

import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Test = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <lord-icon
        style={{ width: '300px', height: '300px', top: '-25%' }}
        src='/assets/subject-icons/wired-flat-1953-african-culture.json'
        trigger='hover'
        className='absolute'
      />
    </div>
  );
};

export default Test;
