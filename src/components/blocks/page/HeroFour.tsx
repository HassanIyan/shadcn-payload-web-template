import React, { FC } from 'react';

interface HeroFourProps {
	[key: string]: unknown;
}

export const HeroFour: FC<HeroFourProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
