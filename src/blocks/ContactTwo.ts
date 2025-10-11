import type { Block } from 'payload'

export const ContactTwo: Block = {
    slug: 'contact-two',
    labels: {
        singular: 'Bgc Contact',
        plural: 'Bgc Contacts',
    },
    admin: {
        group: 'Contact',
    },
    fields: [
        {
            name: 'cards',
            type: 'array',
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
                {
                    name: 'icon',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/icon-selector',
                            Cell: '@/components/payload/icon-selector/cell',
                        },
                    },
                },
                { name: 'title', type: 'text' },
                { name: 'lead', type: 'richText' },
            ],
        },
    ],
}
