import type { Block } from 'payload'

export const AboutThree: Block = {
    slug: 'about-three',
    labels: {
        singular: 'About Varient Three',
        plural: 'About Varient Threes',
    },
    admin: {
        group: 'About',
    },
    fields: [
        {
            name: 'color',
            type: 'text',
            admin: {
                components: {
                    Field: '@/components/payload/ColorPicker',
                },
            },
        },
        { name: 'badge', type: 'text' },
        { name: 'lead', type: 'richText' },
        {
            name: 'bullet',
            type: 'array',
            fields: [{ name: 'title', type: 'text' }],
        },
        {
            name: 'buttons',
            type: 'array',
            fields: [
                { name: 'title', type: 'text' },
                { name: 'link', type: 'text' },
            ],
            maxRows: 2,
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
    ],
}
