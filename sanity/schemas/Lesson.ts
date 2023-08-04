const Unit = {
  title: 'Lessons',
  name: 'lessons',
  type: 'document',
  fields: [
    {
      title: 'Lesson Title',
      name: 'title',
      type: 'string',
      description: "Name of the lesson. Hint: 'Cell Membrane and Transport'",
      validation: (Rule: any) => Rule.required(),
    },

    // {
    //   title: 'Order',
    //   name: 'order',
    //   type: 'number',
    //   description:
    //     'Position of this lesson relative to the other lessons in this unit. You can reference the order field on the course menu to learn why this is required.',
    //   validation: (Rule: any) => Rule.required(),
    // },
    {
      title: 'URL Path to Lesson',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 300 },
      description:
        'The url path that leads to this subject. Hint: A slug of "advanced-math" would have the url: http://sitename/advanced-math. PS: You should auto-generate the slug unless you have a specific route in mind.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Unit',
      name: 'unit',
      type: 'reference',
      to: [{ type: 'units' }],
      description:
        'The unit this lesson belongs to. You can reference the subject field on the course menu to learn why this is required',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Lesson Contents',
      name: 'contents',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tests' }, { type: 'articles' }, { type: 'videos' }] }],
      description: 'The Units that belong to this course.',
      validation: (Rule: any) => Rule.unique(),
    },
    {
      title: 'Lesson Description',
      name: 'description',
      type: 'text',
      description:
        'Hint: In this biology lesson focused on cellular structure and function, students will explore the cell membrane and its essential role in maintaining cellular integrity and regulating the movement of substances in and out of the cell...',
    },
  ],
};

export default Unit;
