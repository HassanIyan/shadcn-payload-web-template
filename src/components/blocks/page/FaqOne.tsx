import React, { FC } from 'react';

interface FaqOneProps {
	[key: string]: unknown;
}

export const FaqOne: FC<FaqOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
