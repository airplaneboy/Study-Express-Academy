'use client';

import { HiCheck } from 'react-icons/hi2';
import confetti from './Confetti';
import { useState } from 'react';

const MarkAsRead = ({ updateUserArticle, read }: { read: boolean; updateUserArticle: () => void }) => {
  const [readState, setReadState] = useState(read);

  return (
    <button
      onClick={() => {
        updateUserArticle();
        setReadState(true);
        confetti({ x: 0.45, y: 0.8 });
      }}
      className={
        readState
          ? 'mt-12 mb-2 border-2 rounded-3xl px-8 py-4 font-semibold border-green-300 text-white  hover:bg-green-600 bg-green-500'
          : 'mt-12 mb-2 border rounded-3xl px-8 py-4 font-semibold border-gray-300 text-gray-700 hover:text-green-600 hover:border-green-600'
      }>
      {read ? (
        <span className='flex gap-2 items-center justify-center'>
          <HiCheck size={20} /> Read
        </span>
      ) : (
        <span className='flex gap-2 items-center justify-center'>
          <HiCheck size={20} /> Mark as read
        </span>
      )}
    </button>
  );
};

export default MarkAsRead;
