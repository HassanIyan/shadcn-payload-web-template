import React, { FC } from 'react';

interface StatsTwoProps {
	[key: string]: unknown;
}

export const StatsTwo: FC<StatsTwoProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
