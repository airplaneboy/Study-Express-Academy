import IntersectionVideo from './IntersectionVideoComponent';
// const IntersectionVideo = dynamic(() => import('./IntersectionVideoComponent'));

const FeatureSection = () => {
  return (
    <section
      className={
        'bg-[radial-gradient(circle,_rgba(191,219,254,1)_0%,_rgba(221,214,254,1)_15%,_rgba(255,241,242,1)_30%,_rgba(255,255,255,1)_50%)] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-32 px-6 sm:px-12 lg:px-24 gap-10 lg:gap-20'
      }>
      <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
        <h1 className='text-3xl sm:text-4xl xl:text-5xl text-center md:text-left leading-[1] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-400 tracking-tight'>
          Transform your learning with our interactive courses
        </h1>
        <p className='leading-8 lg:text-lg text-center md:text-left font-semibold text-gray-500 '>
          We believe that knowledge is power, that&apos;s why our courses are designed to engage your imagination. From
          math and science to arts and language, we&apos;ll take you through an array of subjects like never before!
        </p>
      </div>
      <div className='w-full h-full flex flex-col justify-center items-center gap-10 lg:min-w-[496px] border-0 py-5'>
        {/* <video
          playsInline
          className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
          loop
          autoPlay
          muted
          preload='none'>
          <source src='/assets/Subjects.webm' type='video/webm' />
          Your browser does not support the video tag.
        </video> */}
        <IntersectionVideo
          src='/assets/Subjects.webm'
          playsInline
          className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
          loop
          autoPlay
          muted
          preload='none'
        />
      </div>
    </section>
  );
};

export default FeatureSection;
