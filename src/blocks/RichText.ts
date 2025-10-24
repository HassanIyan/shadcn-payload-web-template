import type { Block } from 'payload'

export const RichText: Block = {
    slug: 'rich-text',
    labels: {
        singular: 'Rich Text',
        plural: 'Rich Texts',
    },
    fields: [{ name: 'lead', type: 'richText' }],
}
