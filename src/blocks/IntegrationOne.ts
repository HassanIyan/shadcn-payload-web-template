import type { Block } from 'payload'

export const IntegrationOne: Block = {
    slug: 'integration-one',
    labels: {
        singular: 'Integration',
        plural: 'Integrations',
    },
    admin: {
        group: 'Integration',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'integration',
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
                {
                    name: 'records',
                    type: 'array',
                    fields: [
                        { name: 'name', type: 'text' },
                        { name: 'value', type: 'text' },
                    ],
                },
            ],
        },
    ],
}
