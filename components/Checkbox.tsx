'use client';
import { useState } from 'react';

const Checkbox = ({
  labelClassName,
  children,
  id,
  checked,
  checkedHandler,
}: {
  checked?: boolean;
  labelClassName?: string;
  children: string;
  id: string;
  checkedHandler: (isChecked: boolean) => void;
}) => {
  const [box, setBox] = useState(checked || false);

  return (
    <div className='flex items-center gap-2'>
      <input
        checked={box}
        onChange={(e) => {
          checkedHandler(e.target.checked);

          return setBox(e.target.checked);
        }}
        id={id}
        name='courses'
        type='checkbox'
        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-400 bg-transparent rounded'
      />

      <label htmlFor={id} className={labelClassName}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
