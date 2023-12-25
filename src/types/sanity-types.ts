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
