import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'name',
        group: 'Content Management',
        hideAPIURL: true,
    },
    fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        { name: 'slug', type: 'text', label: 'Slug', unique: true },
    ],
    hooks: {
        beforeValidate: [
            ({ data }) => ({
                ...data,
                slug: data?.slug || data?.name.toLowerCase().replaceAll(' ', '-'),
            }),
        ],
    },
}
