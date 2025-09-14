import type { CollectionConfig } from 'payload'

export const Forms: CollectionConfig = {
    slug: 'forms',
    admin: {
        useAsTitle: 'name',
        group: 'Form Management',
        hideAPIURL: true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Form Name',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Description',
        },
        {
            name: 'blocks',
            type: 'blocks',
            label: 'Form Fields',
            required: true,
            blocks: [
                {
                    slug: 'textField',
                    labels: { singular: 'Text Field', plural: 'Text Fields' },
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'name', type: 'text', required: true },
                        { name: 'placeholder', type: 'text' },
                        { name: 'helpText', type: 'text' },
                        { name: 'required', type: 'checkbox', defaultValue: false },
                    ],
                },
                {
                    slug: 'emailField',
                    labels: { singular: 'Email Field', plural: 'Email Fields' },
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'name', type: 'text', required: true },
                        { name: 'placeholder', type: 'text' },
                        { name: 'helpText', type: 'text' },
                        { name: 'required', type: 'checkbox', defaultValue: true },
                    ],
                },
                {
                    slug: 'numberField',
                    labels: { singular: 'Number Field', plural: 'Number Fields' },
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'name', type: 'text', required: true },
                        { name: 'placeholder', type: 'text' },
                        { name: 'min', type: 'number' },
                        { name: 'max', type: 'number' },
                        { name: 'helpText', type: 'text' },
                        { name: 'required', type: 'checkbox', defaultValue: false },
                    ],
                },
                {
                    slug: 'textareaField',
                    labels: { singular: 'Textarea Field', plural: 'Textarea Fields' },
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'name', type: 'text', required: true },
                        { name: 'placeholder', type: 'text' },
                        { name: 'rows', type: 'number', defaultValue: 3 },
                        { name: 'helpText', type: 'text' },
                        { name: 'required', type: 'checkbox', defaultValue: false },
                    ],
                },
                {
                    slug: 'selectField',
                    labels: { singular: 'Select Field', plural: 'Select Fields' },
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'name', type: 'text', required: true },
                        {
                            name: 'options',
                            type: 'array',
                            fields: [
                                { name: 'label', type: 'text', required: true },
                                { name: 'value', type: 'text', required: true },
                                { name: 'disabled', type: 'checkbox', defaultValue: false },
                            ],
                        },
                        { name: 'placeholder', type: 'text' },
                        { name: 'helpText', type: 'text' },
                        { name: 'required', type: 'checkbox', defaultValue: false },
                    ],
                },
                {
                    slug: 'checkboxGroup',
                    labels: { singular: 'Checkbox Group', plural: 'Checkbox Groups' },
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'name', type: 'text', required: true },
                        {
                            name: 'options',
                            type: 'array',
                            label: 'Options',
                            fields: [
                                { name: 'label', type: 'text', required: true },
                                { name: 'value', type: 'text', required: true },
                                {
                                    name: 'defaultChecked',
                                    type: 'checkbox',
                                    label: 'Checked by default',
                                },
                                { name: 'disabled', type: 'checkbox', defaultValue: false },
                            ],
                        },
                        { name: 'helpText', type: 'text' },
                        {
                            name: 'minSelections',
                            type: 'number',
                            label: 'Minimum selections allowed',
                        },
                        {
                            name: 'maxSelections',
                            type: 'number',
                            label: 'Maximum selections allowed',
                        },
                        { name: 'required', type: 'checkbox', defaultValue: false },
                    ],
                },
                {
                    slug: 'radioGroup',
                    labels: { singular: 'Radio Group', plural: 'Radio Groups' },
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'name', type: 'text', required: true },
                        {
                            name: 'options',
                            type: 'array',
                            label: 'Options',
                            fields: [
                                { name: 'label', type: 'text', required: true },
                                { name: 'value', type: 'text', required: true },
                                { name: 'disabled', type: 'checkbox', defaultValue: false },
                            ],
                        },
                        { name: 'helpText', type: 'text' },
                        { name: 'defaultValue', type: 'text', label: 'Default selected value' },
                        { name: 'required', type: 'checkbox', defaultValue: false },
                    ],
                },
                {
                    slug: 'fileUploadField',
                    labels: { singular: 'File Upload', plural: 'File Uploads' },
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'name', type: 'text', required: true },
                        {
                            name: 'file',
                            type: 'upload',
                            relationTo: 'media', // assumes you have a media collection
                            required: false,
                        },
                        { name: 'helpText', type: 'text' },
                        { name: 'required', type: 'checkbox', defaultValue: false },
                        {
                            name: 'acceptedFileTypes',
                            type: 'text',
                            label: 'Accepted MIME types (comma separated)',
                        },
                        { name: 'maxFileSizeMB', type: 'number', label: 'Max file size (MB)' },
                    ],
                },
            ],
        },
        {
            name: 'mailTo',
            type: 'email',
            label: 'Recipient Email',
            required: true,
        },
        {
            name: 'mailSubject',
            type: 'text',
            label: 'Email Subject (for submissions)',
        },
        {
            name: 'active',
            type: 'checkbox',
            label: 'Active',
            defaultValue: true,
        },
        {
            name: 'createdBy',
            type: 'relationship',
            relationTo: 'users',
            label: 'Created By',
            required: false,
        },
    ],
}
