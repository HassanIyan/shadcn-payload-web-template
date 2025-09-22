import React, { FC } from 'react';

interface CallToActionOneProps {
	[key: string]: unknown;
}

export const CallToActionOne: FC<CallToActionOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
