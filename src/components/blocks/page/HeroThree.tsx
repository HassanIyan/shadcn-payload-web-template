import React, { FC } from 'react'

interface HeroThreeProps {
    [key: string]: unknown
}

export const HeroThree: FC<HeroThreeProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
