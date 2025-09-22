import React, { FC } from 'react';

interface PricingOneProps {
	[key: string]: unknown;
}

export const PricingOne: FC<PricingOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
