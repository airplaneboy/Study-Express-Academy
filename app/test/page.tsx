'use client';
import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const DatePicker = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      inputClassName='!h-auto !py-2 focus:!ring-indigo-500 !border-2 focus:!border-indigo-500 !block !w-full sm:!text-sm !text-gray-700 !border-gray-300 !rounded-2xl'
      toggleClassName='text-gray-400 px-3 h-full right-0 absolute top-0'
      useRange={false}
      asSingle={true}
      value={value}
      onChange={handleValueChange}
    />
  );
};
export default DatePicker;
