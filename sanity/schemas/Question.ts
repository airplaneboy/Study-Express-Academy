const Question = {
  title: 'Question',
  name: 'question',
  type: 'document',
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Incorrect Answer Choices',
      name: 'options',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required().unique(),
    },
    // {
    //   title: 'Answer',
    //   name: 'answer',
    //   type: 'text',
    //   validation: (Rule: any) => Rule.required(),
    // },
    {
      title: 'Correct Answer',
      name: 'answer',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The answer would always be added as an option by default.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Question Solution',
      name: 'solution',
      type: 'array',
      of: [{ type: 'block' }],
      // validation: (Rule: any) => Rule.required(),
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
    {
      title: 'Difficulty',
      name: 'difficulty',
      type: 'string',
      description:
        "The difficulty of the question can only be categorized as 'easy,' 'medium,' or 'hard.' If any other values are chosen or empty, the question will be set to 'medium' by default.",
    },
    // {
    //   title: 'Question Type',
    //   name: 'type',
    //   type: 'string',
    //   description:
    //     "The type of question this is ('multiple-choice' or 'student-provided'). If you want multiple choices then use 'multiple-choice,' or if it's going to be inputted, use 'student-provided.'",
    // },
  ],
};

export default Question;
