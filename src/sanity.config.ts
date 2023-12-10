import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import schemas from "./sanity/schemas";
// import {visionTool} from '@sanity/vision'
const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const sanityConfig = defineConfig({
    name: 'default',
    title: 'club-stampz',

    projectId: sanityProjectId!,
    dataset: 'production',

    basePath:'/admin',
    plugins: [deskTool()],

    schema: {
        types: schemas
    }
})

export default sanityConfig