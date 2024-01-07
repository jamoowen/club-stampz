import { DefineSchemaOptions, DocumentDefinition, SchemaType, SchemaTypeDefinition, NumberDefinition, NumberInput , TextDefinition, TextInput } from "sanity";

const pricingSchema: DocumentDefinition = {
    name: "pricingData",
    title: "Pricing page Data",
    type: 'document',
    fields: [
        {
            name: "pricingDescription",
            title: "Pricing description",
            type: "text",
        },
        {
            name: "basePrice",
            title: "Base Price for 3 characters",
            type: "number",
        },
        {
            name: "discount1Threshold",
            title: "Discount 1 threshold",
            type: "number",
        },
        {
            name: "discount1",
            title: "Discount 1 percentage",
            type: "number",
        },
        {
            name: "discount2Threshold",
            title: "Discount 2 threshold",
            type: "number",
        },
        {
            name: "discount2",
            title: "Discount 2 percentage",
            type: "number",
        },
    ]
}

export default pricingSchema

