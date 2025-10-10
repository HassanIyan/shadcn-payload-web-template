import type { Block } from 'payload'

export const ProductsOne: Block = {
    slug: 'products-one',
    labels: {
        singular: 'Product',
        plural: 'Products',
    },
    admin: {
        group: 'Products',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'products',
            type: 'array',
            fields: [
                { name: 'title', type: 'text' },
                { name: 'sub_title', label: 'Sub title', type: 'text' },
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'lead', type: 'richText' },
                {
                    name: 'button',
                    type: 'group',
                    fields: [
                        { name: 'name', type: 'text' },
                        { name: 'link', type: 'text' },
                    ],
                },
            ],
        },
    ],
}
