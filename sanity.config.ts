import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from '@/sanity/schemas/';
import { visionTool } from '@sanity/vision';
import AutoFetchChildren from './sanity/actions';

const config = defineConfig({
  projectId: 'vnyz2nrs',
  dataset: 'development',
  title: 'Study Express Academy',
  apiVersion: '2023-08-02',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  document: {
    actions: (prev, context) => {
      // Only add the action for documents of type "movie"
      return context.schemaType === 'subjects' ? [AutoFetchChildren, ...prev] : prev;
    },
  },
  schema: { types: schemaTypes },
});

export default config;
