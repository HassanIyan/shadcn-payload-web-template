import type { Block } from 'payload'

export const ContactOne: Block = {
    slug: 'contact-one',
    labels: {
        singular: 'Clean Contact',
        plural: 'Clean Contacts',
    },
    admin: {
        group: 'Contact',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
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
                { name: 'description', type: 'textarea' },
                {
                    name: 'button',
                    type: 'group',
                    fields: [
                        { name: 'title', type: 'text' },
                        { name: 'link', type: 'text' },
                    ],
                },
            ],
        },
    ],
}
