import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import schemas from "./sanity/schemas";
import { InferSchemaValues } from "@sanity-typed/types";
// import {visionTool} from '@sanity/vision'
const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const sanityConfig = defineConfig({
    name: 'default',
    title: 'club-stampz',

    projectId: sanityProjectId!,
    dataset: 'production',

    apiVersion: '2023-12-12',

    basePath:'/admin',
    plugins: [deskTool()],

    schema: {
        types: schemas
    }
})


export default sanityConfig
type HomePageData = InferSchemaValues<typeof sanityConfig>
export type Foo = HomePageData['default']['homepageData']