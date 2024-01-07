import { PortableTextBlock } from "@sanity-typed/types"

export type HomePageData = {
    _id: string
    _createdAt: Date
    productText: string
    heroImage: string
    aboutText: string
    productImage: string
    aboutImage: string
}

export type productPageData = {
    _id: string
    _createdAt: Date
    backgroundImage: string
    customizationDetails: PortableTextBlock[];
}
export type aboutPageData = {
    _id: string
    _createdAt: Date
    backgroundImage: string
    aboutDetails: PortableTextBlock[];
}

export type PricingPageData = {
    _id: string
    _createdAt: Date
    pricingDescription: string
    basePrice: number
    discount1Threshold: number
    discount1: number
    discount2Threshold: number
    discount2: number
}