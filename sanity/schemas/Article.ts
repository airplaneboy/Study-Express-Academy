import { slugifyWithSuffix } from '../sanity-libs';

const Article = {
  title: 'Article',
  name: 'articles',
  type: 'document',
  fields: [
    {
      title: 'Article Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'URL Path to Article',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 300, slugify: (input: string) => slugifyWithSuffix(input, 'article') },
      description:
        'The url path that leads to this subject. Hint: A slug of "advanced-math" would have the url: http://sitename/advanced-math. PS: You should auto-generate the slug unless you have a specific route in mind.',
      validation: (Rule: any) =>
        Rule.required().custom((slug: { current: string }) => {
          if (!slug.current.endsWith('article'))
            return 'Slug must end with "article." You can use the generate button to get this faster';

          return true;
        }),
    },
    {
      title: 'Lesson',
      name: 'lesson',
      type: 'reference',
      to: [{ type: 'lessons' }],
      description:
        'The lesson this article belongs to. You can reference the subject field on the course menu to learn why this is required',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Article Content',
      name: 'content',
      type: 'array',
      // of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          type: 'block',
          title: 'Block',
          of: [{ type: 'latex', title: 'Inline math' }],
        },
        { type: 'latex', title: 'Math block' },
      ],
    },
  ],
};

export default Article;
