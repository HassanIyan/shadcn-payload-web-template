import React, { FC } from 'react'

interface TeamOneProps {
    [key: string]: unknown
}

export const TeamOne: FC<TeamOneProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
