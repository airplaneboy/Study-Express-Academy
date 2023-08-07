import { slugifyWithSuffix } from '../sanity-libs';

const Test = {
  title: 'Test',
  name: 'tests',
  type: 'document',
  fields: [
    {
      title: 'Test Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'URL Path to Test',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 300, slugify: (input: string) => slugifyWithSuffix(input, 'test') },
      description:
        'The url path that leads to this subject. Hint: A slug of "advanced-math" would have the url: http://sitename/advanced-math. PS: You should auto-generate the slug unless you have a specific route in mind.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Lesson',
      name: 'lesson',
      type: 'reference',
      to: [{ type: 'lessons' }],
      description:
        'The lesson this test belongs to. You can reference the subject field on the course menu to learn why this is required',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export default Test;
