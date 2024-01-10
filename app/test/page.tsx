'use client';

import TeX from '@/components/TeX';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import React, { useRef, useEffect, useState } from 'react';
require('katex/dist/contrib/copy-tex.mjs');
export default function Test({ children }: { children: React.ReactNode }) {
  const spanRef = useRef<HTMLElement>(null);
  // const [expression, setExpression] = useState('c = \\pm\\sqrt{a^2 + b^2}');

  useEffect(() => {
    if (spanRef.current)
      katex.render(children ? children!.toString() : 'c = \\pm\\sqrt{a^2 + b^2}', spanRef.current, {
        throwOnError: false,
      });
  }, [children]);

  return (
    <span ref={spanRef} />
    // <div className='bg-black text-white w-96 h-96'>
    //   {/* <TeX displayMode={true}>{'\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}'}</TeX> */}
    // </div>
  );
}
