const FeatureSection2 = () => {
  return (
    <section className='py-32 w-full h-full flex flex-col items-center justify-between gap-20 px-24 max-w-7xl mx-auto'>
      <div className=' flex flex-row justify-between items-center gap-20'>
        <div className='bg-blue-500 w-full h-full'>a</div>{' '}
        <div className='w-full flex flex-col justify-center gap-3'>
          <h2 className='text-2xl leading-[1] font-extrabold'>Join our Tech and Innovation Hub</h2>
          <p className='leading-6 text-base font-medium text-gray-800'>
            Get ahead in the digital age with our technology and innovation courses! Whether you&apos;re interested in
            coding, web development, or artificial intelligence, we&apos;re here to help you gain the skills you need
            for success in today&apos;s ever-changing technological world.
          </p>
        </div>
      </div>

      <div className=' flex flex-row justify-between items-center gap-20'>
        <div className='w-full flex flex-col justify-center gap-3'>
          <h1 className='text-2xl leading-[1] font-extrabold'>Practical Life Skills Development</h1>
          <p className='leading-6 text-base font-medium text-gray-800'>
            Beyond academics, our academy offers courses that focus on practical life skills. From financial literacy
            and communication skills to wellness and personal development, empower yourself with a holistic education
            that goes beyond traditional subjects.
          </p>
        </div>
        <div className='bg-blue-500 w-full h-full'>a</div>
      </div>

      <div className=' flex flex-row justify-between items-center gap-20'>
        <div className='bg-blue-500 w-full h-full'>a</div>
        <div className='w-full flex flex-col justify-center gap-3'>
          <h1 className='text-2xl leading-[1] font-extrabold'>Dynamic Science Explorations</h1>
          <p className='leading-6 text-base font-medium text-gray-800'>
            Dive into the fascinating world of science with courses spanning physics, chemistry, biology, and more. From
            fundamental principles to cutting-edge discoveries, our science curriculum offers a dynamic exploration of
            the natural world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection2;
