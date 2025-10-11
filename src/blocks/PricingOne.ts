import type { Block } from 'payload'

export const PricingOne: Block = {
    slug: 'pricing-one',
    labels: {
        singular: 'Pricing',
        plural: 'Pricings',
    },
    admin: {
        group: 'Pricing',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
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
            name: 'price',
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
                { name: 'sub_title', label: 'Sub title', type: 'text' },
                { name: 'price', type: 'text' },
                { name: 'basis', type: 'text' },
                { name: 'bullet', type: 'array', fields: [{ name: 'title', type: 'text' }] },
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
