import React, { FC } from 'react';

interface FormOneProps {
	[key: string]: unknown;
}

export const FormOne: FC<FormOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
