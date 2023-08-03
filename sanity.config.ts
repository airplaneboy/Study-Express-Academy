import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from '@/sanity/schemas/';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
  projectId: '0k6k13xj',
  dataset: 'production',
  title: 'Study Express Academy',
  apiVersion: '2023-08-02',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});

export default config;
