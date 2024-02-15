const Quotes = ({ quote, author }: { quote: string; author: string }) => {
  return (
    <div className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-[1px] sm:mx-10 rounded-3xl'>
      {/* <div className='relative top-[1px] right-[1px] shadow-xl px-20 py-10 bg-white/[.85] rounded-3xl flex flex-col items-start'> */}
      <div className='relative shadow-inner shadow-purple-500 px-4 sm:px-10 md:px-20 py-10 bg-white/[.85] rounded-3xl flex flex-col items-start'>
        <span className='text-xl block text-center tracking-normal italic font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-normal'>
          <span className='text-blue-600 text-4xl'>&ldquo; </span>
          {quote}
          <span className='text-blue-600 text-4xl'>&rdquo;</span>
        </span>
        <span className='mt-10 justify-between flex flex-col-reverse lg:flex-row text-gray-700 align-middle w-full gap-4'>
          <span className='text-xs text-gray-500 self-center text-center'>
            Inspirational quotes provided by{' '}
            <a className='text-blue-600 underline' href='https://zenquotes.io/' target='_blank'>
              ZenQuotes API
            </a>
          </span>
          <div className='text-right whitespace-nowrap'>
            <span className='text-blue-600 font-extrabold mr-1'>&mdash;</span>
            {author}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Quotes;
