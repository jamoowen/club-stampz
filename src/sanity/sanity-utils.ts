
import { InferSchemaValues } from "@sanity-typed/types";
import { createClient, groq } from "next-sanity";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

// Nextjs is caching the sanity fetch request
// Ive tried adding revalidate:  { next: { revalidate: 10 } } to the fetch request but only works once then reverts if i change the value



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
                aboutText,
                "heroImage": heroImage.asset->url,
                "productImage": productImage.asset->url,
                "aboutImage": aboutImage.asset->url
            }`
        )
        return data
    } catch (error) {
        console.log("ERROR fetching data from sanity", error)
    }



}