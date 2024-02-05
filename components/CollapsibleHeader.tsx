'use client';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
//@ts-ignore
import cx from 'clsx/lite';

const ScrollHeader = ({
  initialHeight,
  finalHeight,
  children,
}: {
  initialHeight: string;
  finalHeight: string;
  children: React.ReactNode;
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsCollapsed(scrollPosition > 50);
  }, [scrollPosition]);
  return (
    <div
      className={cx(
        'md:top-16  sticky top-0 w-full text-gray-800 backdrop-blur-md border-b transition-all  duration-300 flex flex-col justify-center z-[9] ',
        !isCollapsed ? initialHeight : finalHeight
      )}>
      {children}
    </div>
  );
};

export default ScrollHeader;
