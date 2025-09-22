import React, { FC } from 'react';

interface AboutThreeProps {
	[key: string]: unknown;
}

export const AboutThree: FC<AboutThreeProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
