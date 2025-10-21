import { GlobalConfig } from 'payload'

export const Theme: GlobalConfig = {
    slug: 'theme',
    label: 'Theme',
    admin: {
        group: 'Website',
        hideAPIURL: false,
    },
    fields: [
        {
            name: 'radius',
            label: 'Radius',
            type: 'number',
            admin: { description: 'value must be a REM value' },
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'background',
                    label: 'Background',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
                {
                    name: 'foreground',
                    label: 'Foreground',
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
            type: 'row',
            fields: [
                {
                    name: 'card',
                    label: 'Card',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
                {
                    name: 'cardForeground',
                    label: 'Card Foreground',
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
            type: 'row',
            fields: [
                {
                    name: 'popover',
                    label: 'Popover',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
                {
                    name: 'popoverForeground',
                    label: 'Popover Foreground',
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
            type: 'row',
            fields: [
                {
                    name: 'primary',
                    label: 'Primary',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
                {
                    name: 'primaryForeground',
                    label: 'Primary Foreground',
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
            type: 'row',
            fields: [
                {
                    name: 'secondary',
                    label: 'Secondary',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
                {
                    name: 'secondaryForeground',
                    label: 'Secondary Foreground',
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
            type: 'row',
            fields: [
                {
                    name: 'muted',
                    label: 'Muted',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
                {
                    name: 'mutedForeground',
                    label: 'mutedForeground',
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
            type: 'row',
            fields: [
                {
                    name: 'accent',
                    label: 'Accent',
                    type: 'text',
                    admin: {
                        components: {
                            Field: '@/components/payload/ColorPicker',
                        },
                    },
                },
                {
                    name: 'accentForeground',
                    label: 'Accent Foreground',
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
            name: 'destructive',
            label: 'Destructive',
            type: 'text',
            admin: {
                components: {
                    Field: '@/components/payload/ColorPicker',
                },
            },
        },
        {
            name: 'border',
            label: 'Border',
            type: 'text',
            admin: {
                components: {
                    Field: '@/components/payload/ColorPicker',
                },
            },
        },
        {
            name: 'input',
            label: 'Input',
            type: 'text',
            admin: {
                components: {
                    Field: '@/components/payload/ColorPicker',
                },
            },
        },
        {
            name: 'ring',
            label: 'Ring',
            type: 'text',
            admin: {
                components: {
                    Field: '@/components/payload/ColorPicker',
                },
            },
        },
    ],
}
