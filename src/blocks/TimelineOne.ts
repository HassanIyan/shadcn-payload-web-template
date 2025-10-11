import type { Block } from 'payload'

export const TimelineOne: Block = {
    slug: 'timeline-one',
    labels: {
        singular: 'Timeline',
        plural: 'Timelines',
    },
    admin: {
        group: 'Timeline',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'timeline',
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
            ],
        },
    ],
}
