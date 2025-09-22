import React, { FC } from 'react';

interface ResourcesOneProps {
	[key: string]: unknown;
}

export const ResourcesOne: FC<ResourcesOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
