import NextLink from 'next/link';
// import kebabCase from 'lodash/kebabcase';

interface ICustomLink {
  pathStrings: string[];
  children: React.ReactNode;
  className?: string;
}
const CustomLink = ({ children, pathStrings, className = '' }: ICustomLink) => {
  const href = pathStrings.map((items) => items).join('/');
  return (
    <NextLink className={className + ' max-md:truncate'} href={href}>
      {children}
    </NextLink>
  );
};

export default CustomLink;
