import jsonResponse from '@/utils/jsonResponse';
import client from '@/sanity/client-config';

export async function GET() {
  console.log('\n=======================This webhook route was called=======================\n');
  return jsonResponse({ Response: 'Webhook was executed' }, 'OK');
}

// Define the logic to add a course to a subject
// async function addCourseToSubject(courseId:any, subjectId:any) {
//   // Fetch the course and subject documents
//   const course = await client.getDocument(courseId);
//   const subject = await client.getDocument(subjectId);

//   // Check if both the course and subject exist
//   if (course && subject) {
//     // Add the course to the subject's courses array
//     const updatedSubject = {
//       ...subject,
//       courses: [...(subject.courses || []), courseId],
//     };

//     // Update the subject document in Sanity
//     await client.createOrReplace(updatedSubject);
//   }
// }

// // Trigger this function when a new course is created
// // Pass the courseId and subjectId as arguments
// addCourseToSubject('new-course-id', 'subject-id');

// export async POST(){

// }
