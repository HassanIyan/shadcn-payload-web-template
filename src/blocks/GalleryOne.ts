import type { Block } from 'payload'

export const GalleryOne: Block = {
    slug: 'gallery-one',
    labels: {
        singular: 'Lighthouse Gallery',
        plural: 'Lighthouse Galleries',
    },
    admin: {
        group: 'Gallery',
    },
    fields: [{ name: 'images', type: 'upload', relationTo: 'media', hasMany: true }],
}
