import { PortableText, PortableTextReactComponents, PortableTextTypeComponentProps } from '@portabletext/react';
import TeX from './TeX';

const components: Partial<PortableTextReactComponents> | undefined = {
  types: {
    latex: ({ value, isInline }: PortableTextTypeComponentProps<any>) => (
      <TeX displayMode={isInline ? false : true}>{value.body}</TeX>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className='text-3xl font-semibold mt-12 mb-4'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-2xl font-semibold mt-12 mb-4'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-lg font-semibold mt-12 mb-4'>{children}</h3>,
    h4: ({ children }) => <h4 className='text-base font-semibold mt-12 mb-4'>{children}</h4>,
    h5: ({ children }) => <h5 className='text-[13.28px] line-height: 1.25rem font-semibold mt-6 mb-2'>{children}</h5>,
    h6: ({ children }) => <h6 className='text-[10.72px] line-height: 0.85rem font-semibold mt-6 mb-2'>{children}</h6>,
    normal: ({ children }) => <p className='text-xl mb-8'>{children}</p>,

    blockquote: ({ children }) => (
      <blockquote className='border-l-purple-500 border-l-4 pl-3 text-gray-600 my-6'>{children}</blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => <ul className='mb-8'>{children}</ul>,
    number: ({ children }) => <ol className='mb-8'>{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: 'disc' }} className='mx-4 my-4'>
        {children}
      </li>
    ),

    number: ({ children }) => (
      <li style={{ listStyleType: 'counter' }} className='mx-4 '>
        {children}
      </li>
    ),
  },

  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} className='underline text-teal-700 font-semibold'>
          {children}
        </a>
      );
    },
  },
};

const CustomPortableText = ({ value, className }: { value: any; className?: string | undefined }) => {
  return (
    <span className={className}>
      <PortableText value={value} components={components}></PortableText>
    </span>
  );
};

export default CustomPortableText;
