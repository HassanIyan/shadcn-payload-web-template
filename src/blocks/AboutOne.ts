import type { Block } from 'payload'

export const AboutOne: Block = {
    slug: 'about-one',
    labels: {
        singular: 'About Varient One',
        plural: 'About Varient Ones',
    },
    admin: {
        group: 'About',
    },
    fields: [
        { name: 'badge', type: 'text' },
        {
            type: 'row',
            fields: [
                { name: 'lead', type: 'richText' },
                { name: 'image', type: 'upload', relationTo: 'media' },
            ],
        },
        {
            name: 'button',
            type: 'group',
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
