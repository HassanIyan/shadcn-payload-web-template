import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        group: 'Payload CMS',
        hideAPIURL: false,
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
    upload: true,
}
