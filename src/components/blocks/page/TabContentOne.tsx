import React, { FC } from 'react'

interface TabContentOneProps {
    [key: string]: unknown
}

export const TabContentOne: FC<TabContentOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
