import { slugifyWithSuffix } from '../sanity-libs';

const Video = {
  title: 'Video',
  name: 'videos',
  type: 'document',
  fields: [
    {
      title: 'Video Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'URL Path to Video',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 300, slugify: (input: any) => slugifyWithSuffix(input, 'video') },
      description:
        'The url path that leads to this subject. Hint: A slug of "advanced-math" would have the url: http://sitename/advanced-math. PS: You should auto-generate the slug unless you have a specific route in mind.',
      validation: (Rule: any) =>
        Rule.required().custom((slug: { current: string }) => {
          if (!slug.current.endsWith('video'))
            return 'Slug must end with "video." You can use the generate button to get this faster';

          return true;
        }),
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
    {
      title: 'Video URL',
      name: 'url',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Video Description',
      name: 'description',
      type: 'text',
      description: 'Tell the users more about the content of the video, and what they are going to learn from',
    },
  ],
};

export default Video;
