import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
    slug: 'events',
    admin: {
        useAsTitle: 'title',
        group: 'Content Management',
        hideAPIURL: false,
    },
    fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'location', type: 'text', label: 'Location' },
        { name: 'audience', type: 'text', label: 'Audience' },
        {
            name: 'description',
            type: 'richText',
            label: 'Description',
            editor: lexicalEditor({
                features: ({ rootFeatures }) => [...rootFeatures, FixedToolbarFeature()],
            }),
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
            name: 'start_date',
            type: 'date',
            label: 'Start Date',
            required: true,
            defaultValue: new Date(),
            admin: { date: { pickerAppearance: 'dayAndTime' }, position: 'sidebar' },
        },
        {
            name: 'end_date',
            type: 'date',
            label: 'End Date',
            admin: { date: { pickerAppearance: 'dayAndTime' }, position: 'sidebar' },
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
            autosave: false,
            schedulePublish: true,
        },
    },
    trash: true,
}
