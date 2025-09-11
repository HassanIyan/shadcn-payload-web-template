'use client'

import dynamic from 'next/dynamic'
import type { DefaultCellComponentProps } from 'payload'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

const Cell = (props: DefaultCellComponentProps) => {
    if (!props.cellData) {
        return <div>No icon selected</div>
    }

    // @ts-expect-error: icon is not typed
    const Icon = dynamic(dynamicIconImports[props.cellData])

    return (
        <div>
            {/* @ts-expect-error: icon is not typed */}
            <Icon size={24} />
        </div>
    )
}

export default Cell
