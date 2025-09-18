import { defineField, defineType } from "sanity";

export const addressType = defineType({
    name: "address",
    title: "Address",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Addressee Name",
            type: "string",
            description: "A friendly name for this address (e.g., Home, Work)",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "User Email",
            type: "email"
        }),
        defineField({
            name: "city",
            title: "City",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "state",
            title: "State",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "zip",
            title: "ZIP Code",
            type: "string",
            description: "format: 12345 or 12345-6789",
            validation: (Rule) => 
                Rule.required().regex(/^\d{5}(-\d{4})?$/, {
                name: "zipCode",
                invert: false,
                }).custom((zip: string | undefined) => {
                if (!zip){
                    return "ZIP code is required";
                }
                if (!zip.match(/^\d{5}(-\d{4})?$/)) {
                    return "Please enter a valid ZIP code (e.g., 12345 or 12345-6789)";
                }
                return true;
            }),
        }),
        defineField({
            name: "default",
            title: "Default Address",
            type: "boolean",
            description: "Is this the default address?",
            initialValue: false
        }),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: (new Date()).toISOString(),
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "address",
            city: "city",
            state: "state",
            isDefault: "default",
        },
        prepare({ title, subtitle, city, state, isDefault }) {
            return {
                title: `${title} ${isDefault ? "(Default)" : ""}`,
                subtitle: `${subtitle}, ${city}, ${state}`,
            }
        },
    },
})

