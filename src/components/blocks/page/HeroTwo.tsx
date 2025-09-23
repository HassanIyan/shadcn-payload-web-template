import React, { FC } from 'react'

interface HeroTwoProps {
    [key: string]: unknown
}

export const HeroTwo: FC<HeroTwoProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
