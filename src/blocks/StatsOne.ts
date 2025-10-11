import type { Block } from 'payload'

export const StatsOne: Block = {
    slug: 'stats-one',
    labels: {
        singular: 'Bgc Stat',
        plural: 'Bgc Stats',
    },
    admin: {
        group: 'Stats',
    },
    fields: [
        {
            name: 'items',
            type: 'array',
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
                    name: 'color',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
                { name: 'name', type: 'text' },
                { name: 'value', type: 'text' },
            ],
        },
    ],
}
