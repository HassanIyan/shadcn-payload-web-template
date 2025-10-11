import type { Block } from 'payload'

export const FeaturesFour: Block = {
    slug: 'features-four',
    labels: {
        singular: 'Image Card',
        plural: 'Image Cards',
    },
    admin: {
        group: 'Features',
    },
    fields: [
        {
            name: 'features',
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
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
            ],
        },
    ],
}
