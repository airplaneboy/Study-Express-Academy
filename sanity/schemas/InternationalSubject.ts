const InternationalSubject = {
  title: 'International Subjects',
  name: 'internationalSubjects',
  type: 'document',
  fields: [
    {
      title: 'Subject Title',
      name: 'title',
      type: 'string',
      description: 'Name of the subject. Hint: Biology',
      validation: (Rule: any) => Rule.required(),
    },

    {
      title: 'Subject Courses',
      name: 'courses',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'courses' }] }],
      description: 'The Courses that belong to this subject.',
      validation: (Rule: any) => Rule.unique(),
      // hidden: true,
    },
    {
      title: 'URL Path to Subject',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 300 },
      description:
        'The url path that leads to this subject. Hint: A slug of "advanced-math" would have the url: http://sitename/advanced-math. PS: You should auto-generate the slug unless you have a specific route in mind.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Subject Icon',
      name: 'icon',
      type: 'image',
      description: 'The icon for this subject. Only SVGs are allowed',
      options: {
        // hotspot: true, // <-- Defaults to false
        accept: '.svg',
      },
    },
    {
      title: 'Subject Animated Icon',
      name: 'animatedIcon',
      type: 'string',
      description: 'The animated icon for this subject. Only strings (link to the host) are allowed',
    },
    {
      title: 'Subject Description',
      name: 'description',
      type: 'text',
      description:
        'What is the overview of this subject. Hint: Biology is the study of living organisms and their interactions with the environment, exploring topics like cell structure, evolution, reproduction, and genetics. It plays a crucial role in advancing our understanding of life and its applications in various fields...',
    },
  ],
};

export default InternationalSubject;
