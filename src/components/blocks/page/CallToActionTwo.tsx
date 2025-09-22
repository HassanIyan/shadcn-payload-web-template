import React, { FC } from 'react';

interface CallToActionTwoProps {
	[key: string]: unknown;
}

export const CallToActionTwo: FC<CallToActionTwoProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
