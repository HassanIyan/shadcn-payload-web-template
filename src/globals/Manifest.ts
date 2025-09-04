import { GlobalConfig } from 'payload'

export const Manifest: GlobalConfig = {
    slug: 'manifest',
    label: 'Manifest File',
    admin: {
        group: 'Search Engine Optimization',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'App Name',
        },
        {
            name: 'short_name',
            type: 'text',
            label: 'Short Name',
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Description',
        },
        {
            name: 'start_url',
            type: 'text',
            label: 'Start URL',
        },
        {
            name: 'scope',
            type: 'text',
            label: 'Scope',
        },
        {
            name: 'display',
            type: 'select',
            label: 'Display Mode',
            options: [
                { label: 'Fullscreen', value: 'fullscreen' },
                { label: 'Standalone', value: 'standalone' },
                { label: 'Minimal UI', value: 'minimal-ui' },
                { label: 'Browser', value: 'browser' },
            ],
        },
        {
            name: 'display_override',
            type: 'array',
            label: 'Display Override',
            fields: [
                {
                    name: 'override',
                    label: '',
                    type: 'select',
                    options: [
                        { label: 'Fullscreen', value: 'fullscreen' },
                        { label: 'Standalone', value: 'standalone' },
                        { label: 'Minimal UI', value: 'minimal-ui' },
                        { label: 'Browser', value: 'browser' },
                        { label: 'Window Controls Overlay', value: 'window-controls-overlay' },
                    ],
                },
            ],
        },
        {
            name: 'file_handlers',
            type: 'array',
            label: 'File Handlers',
            labels: { singular: 'File Handler', plural: 'File Handlers' },
            fields: [
                { name: 'action', label: 'Action', type: 'text' },
                {
                    name: 'accept',
                    label: 'Action',
                    type: 'array',
                    fields: [
                        { name: 'mimeType', label: 'Mime Type', type: 'text' },
                        { name: 'value', label: 'Value', type: 'text' },
                    ],
                },
            ],
        },
        {
            name: 'orientation',
            type: 'select',
            label: 'Orientation',
            options: [
                { label: 'Any', value: 'any' },
                { label: 'Natural', value: 'natural' },
                { label: 'Landscape', value: 'landscape' },
                { label: 'Portrait', value: 'portrait' },
                { label: 'Portrait Primary', value: 'portrait-primary' },
                { label: 'Portrait Secondary', value: 'portrait-secondary' },
                { label: 'Landscape Primary', value: 'landscape-primary' },
                { label: 'Landscape Secondary', value: 'landscape-secondary' },
            ],
        },
        {
            name: 'theme_color',
            type: 'text',
            label: 'Theme Color',
        },
        {
            name: 'background_color',
            type: 'text',
            label: 'Background Color',
        },
        {
            name: 'lang',
            type: 'text',
            label: 'Language',
        },
        {
            name: 'dir',
            type: 'select',
            label: 'Text Direction',
            options: [
                { label: 'Left to Right', value: 'ltr' },
                { label: 'Right to Left', value: 'rtl' },
                { label: 'Auto', value: 'auto' },
            ],
        },
        {
            name: 'categories',
            type: 'relationship',
            label: 'Categories',
            relationTo: 'categories',
            hasMany: true,
        },
        {
            name: 'icons',
            type: 'upload',
            label: 'Icons',
            relationTo: 'media',
            hasMany: true,
        },
        {
            name: 'screenshots',
            type: 'upload',
            label: 'Screenshots',
            relationTo: 'media',
            hasMany: true,
        },
        {
            name: 'shortcuts',
            type: 'array',
            label: 'Shortcuts',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    label: 'Name',
                },
                {
                    name: 'short_name',
                    type: 'text',
                    label: 'Short Name',
                },
                {
                    name: 'description',
                    type: 'text',
                    label: 'Description',
                },
                {
                    name: 'url',
                    type: 'text',
                    label: 'URL',
                },
                {
                    name: 'icons',
                    type: 'upload',
                    label: 'Icons',
                    relationTo: 'media',
                    hasMany: true,
                },
            ],
        },
        {
            name: 'prefer_related_applications',
            type: 'checkbox',
            label: 'Prefer Related Applications',
        },
        {
            name: 'related_applications',
            type: 'array',
            label: 'Related Applications',
            fields: [
                {
                    name: 'platform',
                    type: 'text',
                    label: 'Platform',
                },
                {
                    name: 'url',
                    type: 'text',
                    label: 'URL',
                },
                {
                    name: 'id',
                    type: 'text',
                    label: 'ID',
                },
            ],
        },
        {
            name: 'protocol_handlers',
            type: 'array',
            label: 'Protocol Handlers',
            fields: [
                {
                    name: 'protocol',
                    type: 'text',
                    label: 'Protocol',
                },
                {
                    name: 'url',
                    type: 'text',
                    label: 'Handler URL',
                },
            ],
        },
        {
            name: 'share_target',
            type: 'group',
            label: 'Share Target',
            fields: [
                {
                    name: 'action',
                    type: 'text',
                    label: 'Action URL',
                },
                {
                    name: 'method',
                    type: 'select',
                    label: 'Method',
                    options: [
                        { label: 'GET', value: 'GET' },
                        { label: 'POST', value: 'POST' },
                    ],
                },
                {
                    name: 'enctype',
                    type: 'select',
                    label: 'Encoding Type',
                    options: [
                        { label: 'URL Encoded', value: 'application/x-www-form-urlencoded' },
                        { label: 'Multipart', value: 'multipart/form-data' },
                    ],
                },
                {
                    name: 'params',
                    type: 'group',
                    label: 'Parameters',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            label: 'Title Parameter Name',
                        },
                        {
                            name: 'text',
                            type: 'text',
                            label: 'Text Parameter Name',
                        },
                        {
                            name: 'url',
                            type: 'text',
                            label: 'URL Parameter Name',
                        },
                    ],
                },
            ],
        },
    ],
}
