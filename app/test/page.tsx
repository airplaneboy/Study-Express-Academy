import Navbar from '@/components/Navbar';
import { updateCurrentUser } from '@/lib/data/user';

const page = async () => {
  const data = {
    selectedCourses: [
      // { id: 'courseid3', data: { value: 'some modified data' } },
      { id: 'courseid4', data: { value: 'some new data' } },
    ],
  };

  const res = await updateCurrentUser({ data });
  console.log(res);
  return (
    <div>
      <Navbar />
      {/* <button
        className='bg-black text-white block mt-10'
        onClick={() => {
          console.log('i was called');
        }}>
        update current user
      </button> */}
    </div>
  );
};

export default page;
