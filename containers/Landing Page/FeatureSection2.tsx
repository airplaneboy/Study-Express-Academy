const FeatureSection2 = () => {
  return (
    <section className='py-32 w-full h-full flex flex-col items-center justify-between gap-40 px-24 max-w-7xl mx-auto'>
      <div className=' flex flex-row justify-between items-center gap-20'>
        <video
          className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
          loop
          autoPlay
          muted
          preload='auto'>
          <source src='/assets/Streamlined-Test-Prep.webm' type='video/webm' />
          Your browser does not support the video tag.
        </video>
        <div className='w-full flex flex-col justify-center gap-5'>
          <h2 className='text-2xl leading-[1] font-extrabold text-gray-600 tracking-tight'>
            Streamlined Test Preparation
          </h2>
          <p className='leading-6 text-base font-medium text-gray-500 tracking-wide sm:tracking-normal'>
            With our straightforward resources, designed to adapt your level of understanding. You&apos;ll gain access
            to practice tests, question banks, video tutorials, and exam strategies to help you prepare for test day.
          </p>
        </div>
      </div>

      <div className=' flex flex-row justify-between items-center gap-20'>
        <div className='w-full flex flex-col justify-center gap-5'>
          <h1 className='text-2xl leading-[1] font-extrabold text-gray-600 tracking-tight'>
            Personalized Dashboard and Progress Tracking
          </h1>
          <p className='leading-6 text-base font-medium text-gray-500 tracking-wide sm:tracking-normal'>
            It&apos;s easy for you to keep track of how you&apos;re across your courses. Our dashboard keeps you
            organized and motivated, allowing you to see where you need to focus and tweak your study plan to nail them.
          </p>
        </div>
        <video
          className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
          loop
          autoPlay
          muted
          preload='auto'>
          <source src='/assets/Personalized-Dashboard.webm' type='video/webm' />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className=' flex flex-row justify-between items-center gap-20'>
        <video
          className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
          loop
          autoPlay
          muted
          preload='auto'>
          <source src='/assets/Analytics.webm' type='video/webm' />
          Your browser does not support the video tag.
        </video>
        <div className='w-full flex flex-col justify-center gap-5'>
          <h1 className='text-2xl leading-[1] font-extrabold text-gray-600 tracking-tight'>
            Comprehensive Test Analysis
          </h1>
          <p className='leading-6 text-base font-medium text-gray-500 tracking-wide sm:tracking-normal'>
            Our test overview and results analysis break down your performance so you can see your performance. Our
            graphs make it easy to spot trends and figure out where to focus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection2;
