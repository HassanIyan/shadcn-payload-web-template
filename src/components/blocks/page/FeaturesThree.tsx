import React, { FC } from 'react';

interface FeaturesThreeProps {
	[key: string]: unknown;
}

export const FeaturesThree: FC<FeaturesThreeProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
