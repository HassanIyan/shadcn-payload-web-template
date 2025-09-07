import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
    slug: 'tags',
    admin: {
        useAsTitle: 'name',
        group: 'Content Management',
    },
    fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        { name: 'slug', type: 'text', label: 'Slug', unique: true },
    ],
    hooks: {
        beforeValidate: [
            ({ data }) => ({
                ...data,
                slug: data?.slug || data?.title.toLowerCase().replaceAll(' ', '-'),
            }),
        ],
    },
}
