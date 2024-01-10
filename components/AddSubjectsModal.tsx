'use client';
import { HiPlus } from 'react-icons/hi2';
import Checkbox from './Checkbox';
import Modal from './Modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddCoursesModal = ({
  submit,
  subjects,
  selectedSubjects,
}: {
  submit: (currentlySelected: any[]) => void;
  subjects: any[];
  selectedSubjects: any[];
}) => {
  const router = useRouter();
  const [currentlySelected, setCurrentlySelected] = useState<any[]>(selectedSubjects);

  const addToCurrentlySelected = (valueToAdd: any) => {
    const result = currentlySelected.filter((item) => item.id == valueToAdd.id);

    if (result.length > 0) return;
    setCurrentlySelected([...currentlySelected, valueToAdd]);
  };

  const removeFromCurrentlySelected = (valueToRemove: any) => {
    const result = currentlySelected.filter((item) => item.id != valueToRemove.id);
    setCurrentlySelected(result);
  };

  return (
    <Modal
      className='px-4 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 gap-2 flex flex-row items-center justify-center rounded-md bg-blue-700 hover:bg-blue-800 font-bold tracking-wide'
      footerButton={{
        text: `Proceed with ${currentlySelected.length} courses`,
        click: () => {
          submit(currentlySelected);
          router.refresh();
        },
      }}
      buttonName={
        <>
          <HiPlus size={20} /> Add Course
        </>
      }
      header='Tailor Your Interests'>
      {/* Contents */}
      <ul className='gap-5 flex flex-col px-2 py-4 font-medium'>
        {subjects.map((subject: { _id: string; title: string; courses: { _id: string; title: string }[] }) => {
          return (
            <li key={subject._id} className='w-full  bg-gray-200 px-4 py-2 rounded-2xl'>
              <span className='py-1 mb-2 block text-gray-500 font-bold truncate'>{subject?.title}</span>

              <div className='columns-3'>
                {subject?.courses.map((course: { _id: string; title: string }, index) => {
                  return (
                    <div key={course._id}>
                      {/* Checkboxes: add a function prop that accepts button that when triggered handles submit */}

                      {currentlySelected.some((item) => item.id == course._id) ? (
                        <Checkbox
                          checkedHandler={(isChecked: boolean) => {
                            if (isChecked) addToCurrentlySelected({ id: course._id, data: course });
                            else removeFromCurrentlySelected({ id: course._id, data: course });
                          }}
                          checked={true}
                          id={course._id}
                          labelClassName='truncate hover:overflow-visible hover:z-10 hover:shadow hover:shadow-gray-800 transition-all select-none text-blue-100 bg-blue-600 rounded-lg px-2 my-1'>
                          {course.title}
                        </Checkbox>
                      ) : (
                        <Checkbox
                          checkedHandler={(isChecked: boolean) => {
                            if (isChecked) addToCurrentlySelected({ id: course._id, data: course });
                            else removeFromCurrentlySelected({ id: course._id, data: course });
                          }}
                          id={course._id}
                          labelClassName={
                            'truncate	hover:overflow-visible hover:z-10  hover:shadow-gray-500 hover:bg-gray-200 transition-all px-1 rounded-lg border border-transparent hover:border-gray-400 select-none text-gray-800 my-1'
                          }>
                          {course.title}
                        </Checkbox>
                      )}
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </Modal>
  );
};

export default AddCoursesModal;
