const FeatureSection = () => {
  return (
    <section
      className={
        'bg-[radial-gradient(circle,_rgba(191,219,254,1)_0%,_rgba(221,214,254,1)_15%,_rgba(255,241,242,1)_30%,_rgba(255,255,255,1)_50%)] max-w-7xl mx-auto flex flex-row justify-between items-center py-32 px-24 gap-20'
      }>
      <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
        <h1 className='text-5xl leading-[1] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-400 tracking-tight'>
          Transform your learning with our interactive courses
        </h1>
        <p className='leading-8 text-lg font-semibold text-gray-500 '>
          We believe that knowledge is power, that&apos;s why our courses are designed to engage your imagination. From
          math and science to arts and language, we&apos;ll take you through an array of subjects like never before!
        </p>
      </div>

      <div className='w-full h-full flex flex-col justify-center items-center gap-10 min-w-[496px] border-0 py-5'>
        {/* <div className='flex gap-5 items-center justify-between'>
          <div className='flex flex-col gap-3'>
            <span className=' font-bold text-xl tracking-wide'>Personalized Learning Analytics</span>
            <p className='text-sm  leading-6'>
              Access in-depth analytics to understand your learning patterns. Identify your strengths, target areas for
              improvement, and receive personalized recommendations for optimal learning outcomes.
            </p>
          </div>
          <div className='w-full h-32 bg-blue-500 left-2/3 -top-1/4' />
        </div>
        <div className='flex gap-5 items-center justify-between'>
          <div className='flex flex-col gap-3'>
            <span className=' font-bold text-xl tracking-wide'>Adaptive Learning Paths</span>
            <p className='text-sm leading-6'>
              Experience personalized learning journeys tailored to your strengths and weaknesses. Our adaptive
              algorithms adjust course content to match your unique pace and understanding.
            </p>
          </div>

          <div className='w-full h-32 bg-red-500' />
        </div> */}
        <video
          className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
          loop
          autoPlay
          muted
          width='720'
          height='720'
          preload='auto'>
          <source src='/assets/Subjects.webm' type='video/webm' />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default FeatureSection;
