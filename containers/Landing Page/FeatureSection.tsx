const FeatureSection = () => {
  return (
    <section className={'max-w-7xl mx-auto flex flex-row justify-between items-center h-screen px-24 gap-20'}>
      <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
        <h1 className='text-5xl leading-[1] font-extrabold'>
          Transform your learning experience with our interactive courses
        </h1>
        <p className='leading-8 text-lg font-medium text-gray-600'>
          We believe that knowledge is power. Our courses are designed to stir your curiosity and fire up your
          imagination. From math and science to arts and philosophy, journey through an array of subjects like never
          before!
        </p>
      </div>

      <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
        <div className='flex gap-5 items-center justify-between'>
          <p className='text-sm'>
            Access in-depth analytics to understand your learning patterns. Identify your strengths, target areas for
            improvement, and receive personalized recommendations for optimal learning outcomes.
          </p>
          <div className='w-full h-32 bg-blue-500 left-2/3 -top-1/4' />
        </div>
        <div className='flex gap-5 items-center justify-between'>
          <p className='text-sm'>
            Experience personalized learning journeys tailored to your strengths and weaknesses. Our adaptive algorithms
            adjust course content to match your unique pace and understanding.
          </p>
          <div className='w-full h-32 bg-red-500' />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
