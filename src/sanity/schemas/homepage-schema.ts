import { DefineSchemaOptions, DocumentDefinition, SchemaType, SchemaTypeDefinition, TextDefinition, TextInput } from "sanity";



const homepageSchema: DocumentDefinition =  {
    name: "homepageData",
    title: "Homepage Data",
    type: 'document',
    fields: [
        {
            name: "heroImage",
            title: "Hero Image",
            type: "image",
           
        },
        {
            name: "productImage",
            title: "Product Image",
            type: "image",
        },
        {
            name: "productText",
            title: "Product Text",
            type: "text",
        },
        {
            name: "aboutImage",
            title: "About Image",
            type: "image",
        },
        {
            name: "aboutText",
            title: "About Text",
            type: "text",
        },
    ]
}

export default homepageSchema