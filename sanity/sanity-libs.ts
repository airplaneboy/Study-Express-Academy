// utils.js
import slugify from 'slugify';

const slugifyWithSuffix = (input: string, suffix: string, options = {}) => {
  const slug = slugify(input, options);

  return slug.toLowerCase().endsWith(suffix) ? slug.toLowerCase() : `${slug}-${suffix}`.toLowerCase();
};

export { slugifyWithSuffix };
