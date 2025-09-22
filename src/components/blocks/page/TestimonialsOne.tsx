import React, { FC } from 'react';

interface TestimonialsOneProps {
	[key: string]: unknown;
}

export const TestimonialsOne: FC<TestimonialsOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
