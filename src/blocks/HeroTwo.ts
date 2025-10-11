import type { Block } from 'payload'

export const HeroTwo: Block = {
    slug: 'hero-two',
    labels: {
        singular: 'Gradient Hero',
        plural: 'Gradient Heros',
    },
    admin: {
        group: 'Hero',
    },
    fields: [
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
        {
            name: 'colors',
            type: 'group',
            fields: [
                {
                    type: 'row',
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
                    ],
                },
            ],
        },
        {
            name: 'title',
            type: 'group',
            fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'first_part', type: 'text', label: '' },
                        { name: 'second_part', type: 'text', label: '' },
                    ],
                },
            ],
        },
        { name: 'description', type: 'textarea' },
        {
            name: 'buttons',
            type: 'array',
            fields: [
                { name: 'title', type: 'text' },
                { name: 'link', type: 'text' },
            ],
            maxRows: 2,
        },
    ],
}
