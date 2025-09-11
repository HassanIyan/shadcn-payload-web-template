'use client'

import * as React from 'react'
import { SelectInput, useField } from '@payloadcms/ui'
import { OptionObject, TextFieldClientComponent } from 'payload'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

const IconSelector: TextFieldClientComponent = (props) => {
    const { value, setValue } = useField<string>({ path: props.path })

    const options: OptionObject[] = React.useMemo(() => {
        return Object.keys(dynamicIconImports)
            .sort()
            .map((iconName) => ({
                label: iconName,
                value: iconName,
            }))
    }, [])

    return (
        <div>
            <label className="field-label">
                {props.field.label as string}{' '}
                {props.field.required && <span className="required">*</span>}
            </label>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <SelectInput
                    path={props.path}
                    name={props.path}
                    options={options}
                    value={value}
                    style={{ flex: 1 }}
                    onChange={(e) => {
                        const selected = e as OptionObject
                        setValue(selected?.value as string)
                    }}
                />
            </div>
        </div>
    )
}

export default IconSelector
