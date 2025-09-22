import React, { FC } from 'react';

interface ContactTwoProps {
	[key: string]: unknown;
}

export const ContactTwo: FC<ContactTwoProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
