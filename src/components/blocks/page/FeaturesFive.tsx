import React, { FC } from 'react';

interface FeaturesFiveProps {
	[key: string]: unknown;
}

export const FeaturesFive: FC<FeaturesFiveProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
