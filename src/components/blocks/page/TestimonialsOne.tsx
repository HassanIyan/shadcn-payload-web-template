import React, { FC } from 'react'

interface TestimonialsOneProps {
    [key: string]: unknown
}

export const TestimonialsOne: FC<TestimonialsOneProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
