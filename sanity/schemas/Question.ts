const Question = {
  title: 'Question',
  name: 'question',
  type: 'document',
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required().unique(),
    },
    {
      title: 'Test',
      name: 'test',
      type: 'reference',
      to: [{ type: 'tests' }],
      description:
        'The test these questions belongs to. You can reference the subject field on the course menu to learn why this is required',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export default Question;
