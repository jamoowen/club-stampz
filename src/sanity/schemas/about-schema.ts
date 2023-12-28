import { DefineSchemaOptions, DocumentDefinition, SchemaType, SchemaTypeDefinition, TextDefinition, TextInput } from "sanity";



const aboutSchema: DocumentDefinition = {
    name: "aboutData",
    title: "About page Data",
    type: 'document',
    fields: [
        {
            name: "backgroundImage",
            title: "Background Image",
            type: "image",

        },
        {
            title: 'About Club Stampz details',
            name: 'aboutDetails',
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

export default aboutSchema

