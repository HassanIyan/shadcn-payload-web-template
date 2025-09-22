import React, { FC } from 'react';

interface ServicesOneProps {
	[key: string]: unknown;
}

export const ServicesOne: FC<ServicesOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
