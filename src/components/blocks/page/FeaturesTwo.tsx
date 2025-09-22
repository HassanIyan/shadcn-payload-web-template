import React, { FC } from 'react';

interface FeaturesTwoProps {
	[key: string]: unknown;
}

export const FeaturesTwo: FC<FeaturesTwoProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
