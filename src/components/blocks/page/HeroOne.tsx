import React, { FC } from 'react';

interface HeroOneProps {
	[key: string]: unknown;
}

export const HeroOne: FC<HeroOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
