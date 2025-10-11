import type { Block } from 'payload'

export const HeroFour: Block = {
    slug: 'hero-four',
    labels: {
        singular: 'Map Hero',
        plural: 'Map Heros',
    },
    admin: {
        group: 'Hero',
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
        {
            name: 'title',
            type: 'group',
            fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'first_part', label: '', type: 'text' },
                        { name: 'second_part', label: '', type: 'text' },
                    ],
                },
            ],
        },
        { name: 'description', type: 'textarea' },
        { name: 'coordniates', type: 'point' },
        { name: 'name', type: 'text' },
        { name: 'address', type: 'text' },
        {
            name: 'button',
            type: 'group',
            fields: [
                { name: 'title', type: 'text' },
                { name: 'link', type: 'text' },
            ],
        },
    ],
}
