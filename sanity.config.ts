import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from '@/sanity/schemas/';
import { visionTool } from '@sanity/vision';
// import FetchChildren from './sanity/actions';
import CustomToolMenu from './sanity/CustomToolMenu';
import { latexInput } from 'sanity-plugin-latex-input';

const config = defineConfig({
  projectId: 'vnyz2nrs',
  dataset: 'development',
  title: 'Study Express Academy',
  apiVersion: '2023-08-02',
  basePath: '/admin',
  plugins: [deskTool(), visionTool(), latexInput()],
  // document: {
  //   actions: (prev, context) => {
  //     // Only add the action for documents of type "movie"
  //     return context.schemaType === 'subjects' ? [FetchChildren, ...prev] : prev;
  //   },
  // },
  liveEdit: false,
  schema: { types: schemaTypes },
  studio: {
    components: { toolMenu: CustomToolMenu },
  },
});

export default config;
