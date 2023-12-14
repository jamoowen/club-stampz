import { HomePageData } from "@/sanity.config";
import { InferSchemaValues } from "@sanity-typed/types";
import { createClient, groq } from "next-sanity";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID


export async function getHomepageData() {
    const client = createClient({

        projectId: sanityProjectId!,
        dataset: 'production',
        apiVersion: '2023-12-12'
    });

    try {
        const data = client.fetch(
            groq`*[_type == "homepageData"]{
                _id,
                _createdAt,
                productText,
                heroImage,
                aboutText,
                productImage,
                aboutImage
            }`
        )
        return data
    } catch (error) {
        console.log("ERROR fetching data from sanity", error)
    }



}