import { DefineSchemaOptions, DocumentDefinition, SchemaType, SchemaTypeDefinition, TextDefinition, TextInput } from "sanity";



const productsSchema: DocumentDefinition = {
    name: "productsData",
    title: "Product page Data",
    type: 'document',
    fields: [
        {
            name: "backgroundImage",
            title: "Background Image",
            type: "image",

        },
        {
            title: 'Customization details',
            name: 'customizationDetails',
            type: 'array',
            of: [
                {
                    type: 'block',
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' }
                    ]
                }
            ]
        }

    ]
}

export default productsSchema

