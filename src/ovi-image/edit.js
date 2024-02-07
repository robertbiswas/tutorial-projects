
import { MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Button, Icon } from '@wordpress/components';
import './editor.scss';


export default function Edit({ attributes, setAttributes } ) {
	const {id, src, alt } = attributes;
	const ImageIcon = () => (
		<Icon icon="format-image" />
	);
	const ImageRefresh = () => (
		<Icon icon="redo" />
	);
	const ImageRemove = () => (
		<Icon icon="remove" />
	);
	return (
		<figure { ...useBlockProps() }>
			{src && <img src={src} alt={alt} />} 
			<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( image ) =>{
					setAttributes(
						{ 
							id: image.id,
							alt: image.title,
							// src: image.url
							src: ( image.sizes.thumbnail && image.sizes.thumbnail.url ) ||  image.url

						}
					);
				}
				}
				multiple= {false}
				allowedTypes={ 'image/*' }
				value={ id }
				render={ ( { open } ) => (
					<>
						<Button variant="secondary"
							onClick={(open)}
							icon={ (id || src ) ?  ImageRefresh : ImageIcon }
						></Button>
					</>
					)
				 }
			/>
				<Button variant="secondary"
					onClick={()=>setAttributes({ id: null, src: null})}
					icon={ImageRemove}
				></Button>
		</MediaUploadCheck>
		</figure>
		
	);
}
