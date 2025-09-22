import React, { FC } from 'react';

interface QueryOneProps {
	[key: string]: unknown;
}

export const QueryOne: FC<QueryOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
