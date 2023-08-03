import { createClient } from 'next-sanity';
import { cache } from 'react';

const client = createClient({
  projectId: '0k6k13xj',
  dataset: 'production',
  apiVersion: '2023-8-3', // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

// Wrap the cache function in a way that reuses the TypeScript definitions
export default cache(client.fetch.bind(client));
