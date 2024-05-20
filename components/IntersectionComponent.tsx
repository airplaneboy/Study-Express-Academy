'use client';
import { useRef, useEffect, useState } from 'react';

const IntersectionComponent = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className: string | undefined;
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && elementRef.current) setIsVisible(true);
        else setIsVisible(false);
      },
      {
        rootMargin: '0px',
        threshold: 0,
      }
    );

    if (elementRef.current) observer.current.observe(elementRef.current);

    return () => observer?.current?.disconnect();
  }, [isVisible]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible && children}
    </div>
  );
};

export default IntersectionComponent;
