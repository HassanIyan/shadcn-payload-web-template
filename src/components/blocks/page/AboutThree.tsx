import React, { FC } from 'react'

interface AboutThreeProps {
    [key: string]: unknown
}

export const AboutThree: FC<AboutThreeProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
