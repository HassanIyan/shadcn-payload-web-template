import type { Block } from 'payload'

export const CallToActionTwo: Block = {
    slug: 'call-to-action-two',
    labels: {
        singular: 'Gradient CAT',
        plural: 'Gradient CATs',
    },
    admin: {
        group: 'Call To Action',
    },
    fields: [
        {
            name: 'colors',
            type: 'group',
            fields: [
                {
                    name: 'primary',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
                {
                    name: 'secondary',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
                {
                    name: 'accent',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
            ],
        },
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'button',
            type: 'array',
            maxRows: 2,
            fields: [
                { name: 'title', type: 'text' },
                { name: 'link', type: 'text' },
            ],
        },
    ],
}
