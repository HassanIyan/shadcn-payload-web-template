import React, { FC } from 'react';

interface QueryThreeProps {
	[key: string]: unknown;
}

export const QueryThree: FC<QueryThreeProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
