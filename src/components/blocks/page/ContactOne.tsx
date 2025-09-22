import React, { FC } from 'react';

interface ContactOneProps {
	[key: string]: unknown;
}

export const ContactOne: FC<ContactOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
