import { createClient } from 'next-sanity';
import { cache } from 'react';

export const client = createClient({
  projectId: 'vnyz2nrs',
  dataset: 'development',
  apiVersion: '2023-08-03', // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  // perspective: 'published',
});

// Wrap the cache function in a way that reuses the TypeScript definitions
export default cache(client.fetch.bind(client));
