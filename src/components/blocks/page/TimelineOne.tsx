import React, { FC } from 'react';

interface TimelineOneProps {
	[key: string]: unknown;
}

export const TimelineOne: FC<TimelineOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
