import { client } from './client-config';
import pullAll from 'lodash/pullAll';

const addChildrenToParent = async (array: string, parentId: string, childId: string) => {
  let arrayContainer: any = {};
  arrayContainer[array] = [];

  await client
    .patch(parentId)
    .setIfMissing(arrayContainer)
    .append(`${array}`, [{ _ref: childId, _type: 'reference' }])
    .commit({ autoGenerateArrayKeys: true, token: process.env.NEXT_PUBLIC_SANITY_TOKEN });
};

const autoFetch = async ({
  parentSchema,
  childrenSchema,
  parentRef,
}: {
  parentSchema: string;
  childrenSchema: string;
  parentRef: string;
}) => {
  const query = `*[_type== '${parentSchema}'] | order(_createdAt asc)._id`;
  const parentsId = await client.fetch(query);

  parentsId.forEach(async (parentId: string) => {
    //Fetch all children with a similar parent ID
    let childrenId = await client.fetch(
      `*[_type=='${childrenSchema}' && ${parentRef}._ref == $parentId] | order(_createdAt asc)._id `,
      { parentId }
    );

    //Fetch all children in parent array
    let alreadyExistingIds: any[] = [];
    if (childrenSchema == 'tests' || childrenSchema == 'videos' || childrenSchema == 'articles') {
      alreadyExistingIds = await client.fetch(
        `*[_type=='${parentSchema}' && _id ==$parentId ] | order(_createdAt asc).contents[]._ref`,
        { parentId }
      );
    } else {
      alreadyExistingIds = await client.fetch(
        `*[_type=='${parentSchema}' && _id ==$parentId ] | order(_createdAt asc).${childrenSchema}[]._ref`,
        { parentId }
      );
    }

    //Remove children that already exist
    childrenId = pullAll(childrenId, alreadyExistingIds);

    //Add children to parents's children array
    childrenId.forEach((childId: string) => {
      if (childrenSchema == 'tests' || childrenSchema == 'videos' || childrenSchema == 'articles') {
        addChildrenToParent('contents', parentId, childId);
      } else addChildrenToParent(childrenSchema, parentId, childId);
    });
  });
};

export const fetchAll = async () => {
  //Subjects
  await autoFetch({ parentSchema: 'subjects', childrenSchema: 'courses', parentRef: 'subject' });
  //Courses
  await autoFetch({ parentSchema: 'courses', childrenSchema: 'units', parentRef: 'course' });
  //Units
  await autoFetch({ parentSchema: 'units', childrenSchema: 'lessons', parentRef: 'unit' });
  //Lessons
  await autoFetch({ parentSchema: 'lessons', childrenSchema: 'videos', parentRef: 'lesson' });
  await autoFetch({ parentSchema: 'lessons', childrenSchema: 'tests', parentRef: 'lesson' });
  await autoFetch({ parentSchema: 'lessons', childrenSchema: 'articles', parentRef: 'lesson' });
  await autoFetch({ parentSchema: 'tests', childrenSchema: 'questions', parentRef: 'test' });
};

export default function FetchChildren(props: any) {
  return {
    label: 'Fetch All Children',
    onHandle: fetchAll,
  };
}
