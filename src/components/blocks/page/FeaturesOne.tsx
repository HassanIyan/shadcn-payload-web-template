import React, { FC } from 'react';

interface FeaturesOneProps {
	[key: string]: unknown;
}

export const FeaturesOne: FC<FeaturesOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
