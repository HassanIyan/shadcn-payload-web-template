import React, { FC } from 'react';

interface FeaturesFourProps {
	[key: string]: unknown;
}

export const FeaturesFour: FC<FeaturesFourProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
