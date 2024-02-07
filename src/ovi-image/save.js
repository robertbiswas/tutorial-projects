
import { useBlockProps } from '@wordpress/block-editor';
import React from 'react';
export default function save(attributes) {
	const {src, alt} = attributes;
	return (
		<figure  { ...useBlockProps.save() }>
			<img src={src} alt={alt} />
		</figure>
	);
}
