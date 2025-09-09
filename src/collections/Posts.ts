import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        group: 'Content Management',
    },
    fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'description', type: 'textarea', label: 'Description' },
        {
            name: 'lead',
            type: 'richText',
            label: 'Lead',
            editor: lexicalEditor({
                features: ({ rootFeatures }) => [...rootFeatures, FixedToolbarFeature()],
            }),
        },
        {
            name: 'feature_image',
            type: 'upload',
            label: 'Feature Image',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'date',
            type: 'date',
            label: 'Date',
            required: true,
            defaultValue: new Date(),
            admin: { date: { pickerAppearance: 'dayAndTime' }, position: 'sidebar' },
        },
        {
            name: 'author',
            type: 'relationship',
            label: 'Author',
            relationTo: 'users',
            required: true,
            defaultValue: ({ user }) => user?.id,
            admin: { position: 'sidebar' },
        },
        {
            name: 'category',
            type: 'relationship',
            label: 'Category',
            relationTo: 'categories',
            required: true,
            admin: { position: 'sidebar' },
        },
        {
            name: 'tags',
            type: 'relationship',
            label: 'Tags',
            relationTo: 'tags',
            hasMany: true,
            admin: { position: 'sidebar' },
        },
    ],
    versions: {
        drafts: {
            autosave: true,
            schedulePublish: true,
        },
    },
    trash: true,
}
