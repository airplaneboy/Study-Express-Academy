const Unit = {
  title: 'Units',
  name: 'units',
  type: 'document',
  fields: [
    {
      title: 'Unit Title',
      name: 'unit',
      type: 'string',
      description: "Name of the unit. Hint: 'Cellular Structure and Function'",
      validation: (Rule: any) => Rule.required(),
    },

    // {
    //   title: 'Order',
    //   name: 'order',
    //   type: 'number',
    //   description:
    //     'Position of this unit relative to the other units in this course. You can reference the order field on the course menu to learn why this is required.',
    //   validation: (Rule: any) => Rule.required(),
    // },
    {
      title: 'Course',
      name: 'course',
      type: 'reference',
      to: [{ type: 'courses' }],
      description:
        'The course this unit belongs to. You can reference the subject field on the course menu to learn why this is required',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Unit Lessons',
      name: 'lessons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'lessons' }] }],
      description: 'The lessons that belong to this unit.',
      validation: (Rule: any) => Rule.unique(),
    },
    {
      title: 'Unit Icon',
      name: 'icon',
      type: 'image',
      description: 'The icon for this unit. Only SVGs are allowed',
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
        'Hint: This unit focuses on the study of cells, the basic units of life. Students will explore the structure and functions of cells, including organelles, cellular processes, and cell communication. Topics covered include cell division, energy production, and cell specialization in multicellular organisms. Practical lab activities reinforce learning through microscopic observation of cells...',
    },
  ],
};

export default Unit;
