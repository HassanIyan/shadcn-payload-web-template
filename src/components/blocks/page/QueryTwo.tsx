import React, { FC } from 'react';

interface QueryTwoProps {
	[key: string]: unknown;
}

export const QueryTwo: FC<QueryTwoProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
