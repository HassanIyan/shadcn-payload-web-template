import React, { FC } from 'react';

interface AboutTwoProps {
	[key: string]: unknown;
}

export const AboutTwo: FC<AboutTwoProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
