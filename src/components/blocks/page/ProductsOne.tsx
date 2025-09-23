import React, { FC } from 'react'

interface ProductsOneProps {
    [key: string]: unknown
}

export const ProductsOne: FC<ProductsOneProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
