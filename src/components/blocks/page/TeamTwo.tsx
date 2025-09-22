import React, { FC } from 'react';

interface TeamTwoProps {
	[key: string]: unknown;
}

export const TeamTwo: FC<TeamTwoProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
