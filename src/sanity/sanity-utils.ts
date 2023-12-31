
import { InferSchemaValues } from "@sanity-typed/types";
import { createClient, groq } from "next-sanity";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

// Nextjs is caching the sanity fetch request
// Ive tried adding revalidate:  { next: { revalidate: 10 } } to the fetch request but only works once then reverts if i change the value
const client = createClient({

    projectId: sanityProjectId!,
    dataset: 'production',
    apiVersion: '2023-12-12'
});


export async function getHomepageData() {

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

export async function getCarouselImages() {
    

    try {
        const data = client.fetch(
            groq`*[_type == "homePageCarousel"]{
                _id,
                _createdAt,
                "imageUrls": carouselImages[].asset->url
            }`
        )
        return data
    } catch (error) {
        console.log("ERROR fetching carousel images from sanity", error)
    }
}

export async function getProductPageData() {

    try {
        const data = client.fetch(
            groq`*[_type == "productsData"]{
                _id,
                _createdAt,
                "backgroundImage": backgroundImage.asset->url,
                "customizationDetails": customizationDetails

            }`
        )
        return data
    } catch (error) {
        console.log("ERROR fetching products data from sanity", error)
    }
}
export async function getAboutPageData() {

    try {
        const data = client.fetch(
            groq`*[_type == "aboutData"]{
                _id,
                _createdAt,
                "backgroundImage": backgroundImage.asset->url,
                "aboutDetails": aboutDetails

            }`
        )
        return data
    } catch (error) {
        console.log("ERROR fetching about data from sanity", error)
    }
}

export async function getPricingPageData() {

    try {
        const data = client.fetch(
            groq`*[_type == "pricingData"]{
                _id,
                _createdAt,
                pricingDescription,
                basePrice,
                discount1Threshold,
                discount1,
                discount2Threshold,
                discount2
            }`
        )
        return data
    } catch (error) {
        console.log("ERROR fetching pricing page data from sanity", error)
    }
}