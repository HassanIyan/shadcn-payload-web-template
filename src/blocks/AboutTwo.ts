import type { Block } from 'payload'

export const AboutTwo: Block = {
    slug: 'about-two',
    labels: {
        singular: 'About Varient Two',
        plural: 'About Varient Twos',
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
            fields: [
                { name: 'title', type: 'text' },
                {
                    name: 'color',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
            ],
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
    ],
}
