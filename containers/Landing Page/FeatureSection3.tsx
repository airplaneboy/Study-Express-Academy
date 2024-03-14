const FeatureSection3 = () => {
  return (
    <section className={'max-w-7xl mx-auto py-32 px-24 gap-28 flex flex-col'}>
      <div className='flex flex-row justify-between items-center gap-20 '>
        <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
          <h1 className='text-5xl leading-[1] font-extrabold'>Fun and Challenging Adaptive Mastery Activities</h1>
          <p className='leading-8 text-lg font-medium text-gray-800'>
            Engage in adaptive mastery challenges that dynamically adjust difficulty levels based on your performance.
            As you conquer each challenge, the system tailors subsequent exercises to ensure a targeted and reinforcing
            learning experience.
          </p>
        </div>

        <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
          <div className='w-full h-32 bg-red-500' />
        </div>
      </div>

      <div className='flex flex-row justify-between items-center gap-10 text-center'>
        <div className='flex flex-col gap-10 w-full'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-2xl leading-[1] font-extrabold tracking-wide'>Progressive Skill-Building Exercises</h2>
            <p className='leading-6 text-base font-medium text-gray-800'>
              Embark on a journey of skill-building exercises that progress in complexity. From foundational concepts to
              advanced applications, our exercises are designed to incrementally reinforce your understanding.
            </p>
          </div>
          <div className='w-full h-32 bg-blue-500' />
        </div>

        <div className='flex flex-col gap-10 w-full'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-2xl leading-[1] font-extrabold tracking-wide'>Progressive Skill-Building Exercises</h2>
            <p className='leading-6 text-base font-medium text-gray-800'>
              Immerse yourself in real-world scenarios through interactive simulations. Apply theoretical knowledge to
              practical situations, reinforcing your understanding by navigating through simulated challenges.
            </p>
          </div>
          <div className='w-full h-32 bg-blue-500' />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection3;
