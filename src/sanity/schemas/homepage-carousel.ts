import { DefineSchemaOptions, DocumentDefinition, SchemaType, SchemaTypeDefinition, TextDefinition, TextInput } from "sanity";



const homepageCarouselSchema: DocumentDefinition =  {
    name: "homePageCarousel",
    title: "Homepage Carousel Images",
    type: 'document',
    fields: [
        {
            name: "carouselImages",
            title: "Carousel Images",
            type: "array",
            of: [{ type: 'image' }]
        },

    ]
}

export default homepageCarouselSchema