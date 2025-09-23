import React, { FC } from 'react'

interface AboutOneProps {
    [key: string]: unknown
}

export const AboutOne: FC<AboutOneProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
