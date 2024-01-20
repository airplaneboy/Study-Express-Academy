'use client';
import { useRef, useEffect, useState } from 'react';

const OverflowCheckComponent = ({ children }: { children: React.ReactNode }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [input, setInput] = useState(
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At alias sequi iusto molestiae consectetur. Ratione alias nulla excepturi dolores! Reiciendis soluta molestias voluptatum error excepturi labore suscipit in totam eveniet.'
  );

  useEffect(() => {
    setIsOverflowing(textRef.current!.scrollWidth > textRef.current!.clientWidth);
  }, []);

  return (
    <div className='max-w-[50%] p-10 border border-black mx-auto my-auto mt-10'>
      <div ref={textRef} className={`overflow-hidden whitespace-nowrap ${isOverflowing ? 'overflow-ellipsis' : ''}`}>
        {input}
      </div>
      <input type='text' onChange={(e) => setInput(e.target.value)} value={input} />
    </div>
  );
};

export default OverflowCheckComponent;
