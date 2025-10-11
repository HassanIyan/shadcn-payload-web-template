import type { Block } from 'payload'

export const FeaturesTwo: Block = {
    slug: 'features-two',
    labels: {
        singular: 'Icon Gradient Card',
        plural: 'Icon Gradient Cards',
    },
    admin: {
        group: 'Features',
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
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'features',
            type: 'blocks',
            blocks: [
                {
                    slug: 'varient-one',
                    labels: { singular: 'Varient one', plural: 'Varient Ones' },
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
                    ],
                },
                {
                    slug: 'varient-two',
                    labels: { singular: 'Varient Two', plural: 'Varient Twos' },
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
                        { name: 'emoji', type: 'text' },
                        { name: 'title', type: 'text' },
                        { name: 'description', type: 'textarea' },
                    ],
                },
            ],
        },
    ],
}
