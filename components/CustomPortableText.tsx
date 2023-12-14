import { PortableText } from '@portabletext/react';

const components = {
  block: {
    h1: ({ children }: { children: any }) => <h1 className='text-3xl font-semibold'>{children}</h1>,
    h2: ({ children }: { children: any }) => <h2 className='text-2xl font-semibold'>{children}</h2>,
    h3: ({ children }: { children: any }) => <h3 className='text-lg font-semibold'>{children}</h3>,
    h4: ({ children }: { children: any }) => <h4 className='text-base font-semibold'>{children}</h4>,
    h5: ({ children }: { children: any }) => (
      <h5 className='text-[13.28px] line-height: 1.25rem font-semibold'>{children}</h5>
    ),
    h6: ({ children }: { children: any }) => (
      <h6 className='text-[10.72px] line-height: 0.85rem font-semibold'>{children}</h6>
    ),

    blockquote: ({ children }: { children: any }) => (
      <blockquote className='border-l-purple-500 border-l-4 pl-3 text-gray-600'>{children}</blockquote>
    ),
  },

  list: {
    bullet: ({ children }: { children: any }) => <ul className='mt-xl'>{children}</ul>,
    number: ({ children }: { children: any }) => <ol className='mt-lg'>{children}</ol>,
  },

  listItem: {
    bullet: ({ children }: { children: any }) => (
      <li style={{ listStyleType: 'disc' }} className='mx-4'>
        {children}
      </li>
    ),

    number: ({ children }: { children: any }) => (
      <li style={{ listStyleType: 'counter' }} className='mx-4'>
        {children}
      </li>
    ),
  },

  marks: {
    link: ({ value, children }: { value: any; children: any }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} className='underline text-teal-700 font-bold'>
          {children}
        </a>
      );
    },
  },
};

const CustomPortableText = ({ value }: { value: any }) => {
  return <PortableText value={value} components={components as any}></PortableText>;
};

export default CustomPortableText;
