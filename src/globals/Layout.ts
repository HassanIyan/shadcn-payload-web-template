import { GlobalConfig } from 'payload'

export const Layout: GlobalConfig = {
    slug: 'layout',
    label: 'Layout',
    admin: {
        group: 'Website',
        hideAPIURL: true,
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    name: 'header',
                    fields: [
                        {
                            name: 'sticky',
                            type: 'checkbox',
                            label: 'Make the header sticky to top',
                        },
                        { name: 'logo', type: 'upload', label: 'Logo', relationTo: 'media' },
                        {
                            name: 'menu',
                            type: 'group',
                            fields: [
                                {
                                    name: 'align',
                                    type: 'select',
                                    label: 'Align',
                                    options: ['left', 'center', 'right'],
                                },
                                {
                                    name: 'navigation',
                                    type: 'array',
                                    label: 'Navigation',
                                    labels: { singular: 'Link', plural: 'Links' },
                                    fields: [
                                        {
                                            type: 'row',
                                            fields: [
                                                { name: 'label', type: 'text' },
                                                { name: 'url', type: 'text' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'buttons',
                            type: 'array',
                            label: 'Buttons',
                            labels: { singular: 'Button', plural: 'Buttons' },
                            fields: [
                                {
                                    type: 'row',
                                    fields: [
                                        { name: 'label', type: 'text' },
                                        { name: 'url', type: 'text' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'footer',
                    fields: [
                        { name: 'logo', type: 'upload', label: 'Logo', relationTo: 'media' },
                        { name: 'description', type: 'textarea', label: 'Description' },
                        {
                            name: 'social_media',
                            type: 'array',
                            label: 'Social Media',
                            labels: { singular: 'Social Medium', plural: 'Social Media' },
                            fields: [
                                {
                                    name: 'icon',
                                    type: 'text',
                                    label: 'Icon',
                                    admin: {
                                        components: {
                                            Field: '@/components/payload/icon-selector',
                                            Cell: '@/components/payload/icon-selector/cell',
                                        },
                                    },
                                },
                                { name: 'url', type: 'text', label: 'Url' },
                            ],
                        },
                        {
                            name: 'menus',
                            type: 'array',
                            label: 'Menus',
                            labels: { singular: 'Menu', plural: 'Menus' },
                            fields: [
                                { name: 'title', type: 'text', label: 'Title' },
                                {
                                    name: 'navigations',
                                    type: 'array',
                                    label: 'Navigations',
                                    labels: { singular: 'Navigation', plural: 'Navigations' },
                                    fields: [
                                        {
                                            name: 'icon',
                                            type: 'text',
                                            label: 'Icon',
                                            admin: {
                                                components: {
                                                    Field: '@/components/payload/icon-selector',
                                                    Cell: '@/components/payload/icon-selector/cell',
                                                },
                                            },
                                        },
                                        { name: 'title', type: 'text', label: 'Title' },
                                        { name: 'url', type: 'text', label: 'Url' },
                                    ],
                                },
                            ],
                        },
                        { name: 'copy_right', type: 'textarea', label: 'Copy Right' },
                        {
                            name: 'navigations',
                            type: 'array',
                            label: 'Navigations',
                            labels: { singular: 'Navigation', plural: 'Navigations' },
                            fields: [
                                { name: 'title', type: 'text', label: 'Title' },
                                { name: 'url', type: 'text', label: 'Url' },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}
