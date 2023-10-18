import { client } from './client-config';
import pullAll from 'lodash.pullall';
const addChildrenToParent = async (array: string, parentId: string, childId: string) => {
  let arrayContainer: any = {};
  arrayContainer[array] = [];

  await client
    .patch(parentId)
    // Ensure that the `reviews` arrays exists before attempting to add items to it
    .setIfMissing(arrayContainer)
    // Add the items after the last item in the array (append)
    .append(`${array}`, [{ _ref: childId, _type: 'reference' }])
    .commit({
      // Adds a `_key` attribute to array items, unique within the array, to
      // ensure it can be addressed uniquely in a real-time collaboration context
      autoGenerateArrayKeys: true,
      token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    });
};

//#region Fetch Courses
export function AutoFetchCourses(props: any) {
  return {
    label: 'Fetch Courses',
    onHandle: async () => {
      const subject = props.published;
      const query = "*[_type=='courses' && subject._ref == $subjectId] | order(_createdAt asc)._id ";
      const params = { subjectId: subject._id };
      const courses = await client.fetch(query, params);

      courses.forEach((courseId: string) => {
        addChildrenToParent('courses', subject._id, courseId);
      });
    },
  };
}
//#endregion
// {subject = courses , courses = units, units = lessons, lessons = ...}

const fetchAll = async () => {
  const subjectsQuery = "*[_type=='subjects'] | order(_createdAt asc)._id";
  const coursesQuery = "*[_type=='courses'] | order(_createdAt asc)._id";
  const unitsQuery = "*[_type=='units'] | order(_createdAt asc)._id";
  const lessonsQuery = "*[_type=='lessons'] | order(_createdAt asc)._id";

  const subjectIds = await client.fetch(subjectsQuery);

  subjectIds.forEach(async (subjectId: string) => {
    //Fetch all courses with a similar subject ID
    let courseIds = await client.fetch(
      "*[_type=='courses' && subject._ref == $subjectId] | order(_createdAt asc)._id ",
      { subjectId }
    );

    //#region =========================== Courses ===========================
    courseIds.forEach(async (courseId: string) => {
      let unitIds = await client.fetch("*[_type=='units' &&  course._ref ==$courseId] | order(_createdAt asc)._id", {
        courseId,
      });

      //Fetch all units in course array
      const courseUnitsIds = await client.fetch(
        "*[_type=='courses' && _id ==$courseId ] | order(_createdAt asc).units[]._ref",
        { courseId }
      );
    });
    //#endregion

    //#region Fetch Courses
    //Fetch all courses in subject array
    const subjectCoursesIds = await client.fetch(
      "*[_type=='subjects' && _id ==$subjectId ] | order(_createdAt asc).courses[]._ref",
      { subjectId }
    );

    //Remove courses that already exist
    courseIds = pullAll(courseIds, subjectCoursesIds);

    //Add courses to subject's courses array
    courseIds.forEach((courseId: string) => {
      addChildrenToParent('courses', subjectId, courseId);
    });
    //#endregion
  });
};

export default function FetchChildren(props: any) {
  return {
    label: 'Fetch Children',
    onHandle: fetchAll,
  };
}
