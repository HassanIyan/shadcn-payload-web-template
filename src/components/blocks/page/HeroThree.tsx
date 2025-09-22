import React, { FC } from 'react';

interface HeroThreeProps {
	[key: string]: unknown;
}

export const HeroThree: FC<HeroThreeProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
