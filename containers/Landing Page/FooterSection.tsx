import Link from 'next/link';

const FooterSection = () => {
  const column: string | undefined = 'flex gap-5 flex-col ';
  const columnHeader = 'font-bold text-sm text-gray-800';
  const columnList = 'text-xs flex flex-col gap-3';

  return (
    <section className='max-w-7xl mx-auto flex flex-row justify-between items-center min-h-[50vh] px-24 py-12 gap-10'>
      <div className=' flex-1'>
        <h1 className='pb-5 w-full text-4xl tracking-tight font-extrabold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>
          Providing personalized education for every learner&apos;s journey.
        </h1>
      </div>
      <div className='columns-3 flex flex-wrap gap-10'>
        <div className={column}>
          <span className={columnHeader}>About</span>
          <ul className={columnList}>
            <li>
              <Link href='#'>About Us</Link>
            </li>
          </ul>
        </div>

        <div className={column}>
          <span className={columnHeader}>Support and Help</span>
          <ul className={columnList}>
            <li>
              <Link href='#'>Contact Us Help</Link>
            </li>
            <li>
              <Link href='#'>Support Feedback</Link>
            </li>
            <li>
              <Link href='#'>FAQs</Link>
            </li>
          </ul>
        </div>

        <div className={column}>
          <span className={columnHeader}>Legal</span>
          <ul className={columnList}>
            <li>
              <Link href='#'>Terms of Service</Link>
            </li>
            <li>
              <Link href='#'>Privacy Policy</Link>
            </li>
            <li>
              <Link href='#'>Accessibility</Link>
            </li>
            <li>
              <Link href='#'>Copyright Notice</Link>
            </li>
          </ul>
        </div>

        <div className={column}>
          <span className={columnHeader}>Engagement and Community</span>
          <ul className={columnList}>
            <li>
              <Link href='#'>Blog</Link>
            </li>
            <li>
              <Link href='#'>Partnerships</Link>
            </li>
            <li>
              <Link href='#'>Community Guidelines</Link>
            </li>
            <li>
              <Link href='#'>Careers</Link>
            </li>
            <li>
              <Link href='#'>Donate</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
