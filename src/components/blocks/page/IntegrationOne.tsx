import React, { FC } from 'react';

interface IntegrationOneProps {
	[key: string]: unknown;
}

export const IntegrationOne: FC<IntegrationOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
