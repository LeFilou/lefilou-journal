import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { dataset, projectId, title } from './environment';
import { codeInput } from '@sanity/code-input';

export default defineConfig({
  basePath: '/',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  plugins: [structureTool(), visionTool(), codeInput(),],
  schema: {
    types: schemaTypes,
  },
})
