import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { dataset, projectId, title } from './environment';

export default defineConfig({
  basePath: '/',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
