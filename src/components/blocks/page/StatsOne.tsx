import React, { FC } from 'react';

interface StatsOneProps {
	[key: string]: unknown;
}

export const StatsOne: FC<StatsOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
