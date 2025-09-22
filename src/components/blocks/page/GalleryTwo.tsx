import React, { FC } from 'react';

interface GalleryTwoProps {
	[key: string]: unknown;
}

export const GalleryTwo: FC<GalleryTwoProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
