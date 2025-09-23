import React, { FC } from 'react'

interface FeaturesOneProps {
    [key: string]: unknown
}

export const FeaturesOne: FC<FeaturesOneProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
