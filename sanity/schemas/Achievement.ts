const Achievement = {
  title: 'Achievement',
  name: 'achievements',
  type: 'document',
  fields: [
    {
      title: 'Achievement Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Achievement Description',
      name: 'description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Achievement Icon',
      name: 'icon',
      type: 'image',
      description: 'The icon for this achievement. Only SVGs are allowed',
      options: {
        // hotspot: true, // <-- Defaults to false
        accept: '.svg',
      },
    },
  ],
};

export default Achievement;
