
import { useBlockProps } from '@wordpress/block-editor';
import React from 'react';
export default function save({attributes}) {
	const {imgSrc, alt} = attributes;
	return (
		<>
		<figure  { ...useBlockProps.save() }>
			<img src={imgSrc} alt={alt} />
		</figure>
		</>
	);
}
