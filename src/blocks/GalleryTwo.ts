import type { Block } from 'payload'

export const GalleryTwo: Block = {
    slug: 'gallery-two',
    labels: {
        singular: 'Link Gallery',
        plural: 'Link Galleries',
    },
    admin: {
        group: 'Gallery',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'images',
            type: 'array',
            fields: [
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'link', type: 'text' },
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
            ],
        },
        {
            name: 'buttons',
            type: 'array',
            fields: [
                { name: 'title', type: 'text' },
                { name: 'link', type: 'text' },
                {
                    name: 'type',
                    type: 'select',
                    options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
                    defaultValue: 'default',
                },
            ],
        },
    ],
}
