const Courses = {
  title: 'Courses',
  name: 'courses',
  type: 'document',
  fields: [
    {
      title: 'Course Title',
      name: 'title',
      type: 'string',
      description: "Name of the course. Hint: 'Introduction to Biology'",
      validation: (Rule: any) => Rule.required(),
    },

    {
      title: 'Instructor',
      name: 'instructor',
      type: 'string',
      description: 'Name of person teaching the course',
      validation: (Rule: any) => Rule.required(),
    },
    // {
    //   title: 'Order',
    //   name: 'order',
    //   type: 'number',
    //   description:
    //     'Position of this course relative to the other courses in this subject. This is required to sort the courses in their respective subjects. For example, you might want "Algebra" to be the first course, and "Advanced Calculus" to be last in the math subject. Hint: Using an order of 1 would make this the first course, and using an order of 10 would make this course come after any course with a lesser order.',
    //   validation: (Rule: any) => Rule.required(),
    // },
    {
      title: 'Subject',
      name: 'subject',
      type: 'reference',
      to: [{ type: 'subjects' }],
      description:
        'The subject this course belongs to. Hint: A course with subject "math" would be categorized as a math course.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Course Units',
      name: 'units',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'units' }] }],
      description: 'The Units that belong to this course.',
      validation: (Rule: any) => Rule.unique(),
    },
    {
      title: 'Course Icon',
      name: 'icon',
      type: 'image',
      description: 'The icon for this course. Only SVGs are allowed',
      options: {
        // hotspot: true, // <-- Defaults to false
        accept: '.svg',
      },
    },
    {
      title: 'Course Description',
      name: 'description',
      type: 'text',
      description:
        'Hint: This introductory biology course provides a comprehensive overview of the fundamental principles and concepts in the study of living organisms. Students will explore cell biology, genetics, evolution, ecology, and physiology, gaining a solid foundation in the biological sciences...',
    },
  ],
};

export default Courses;
