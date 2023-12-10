import { DefineSchemaOptions, DocumentDefinition, SchemaType, SchemaTypeDefinition, TextDefinition, TextInput } from "sanity";



const homepageSchema: DocumentDefinition =  {
    name: "homepage-text",
    title: "Homepage Text",
    type: 'document',
    fields: [
        {
            name: "heroImage",
            title: "Hero Image",
            type: "image",
           
        }
    ]
}

export default homepageSchema