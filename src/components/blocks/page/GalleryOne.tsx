import React, { FC } from 'react';

interface GalleryOneProps {
	[key: string]: unknown;
}

export const GalleryOne: FC<GalleryOneProps> = ({ ...props }) => {
    return <section>{JSON.stringify({ ...props }, null, 2)}</section>
}
