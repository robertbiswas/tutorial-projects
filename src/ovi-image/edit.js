
import { MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Button, Icon } from '@wordpress/components';
import './editor.scss';


export default function Edit({ attributes, setAttributes } ) {
	const {id, imgSrc, alt } = attributes;
	const ImageIcon = () => (
		<Icon icon="format-image" />
	);
	const ImageRefresh = () => (
		<Icon icon="redo" />
	);
	const ImageRemove = () => (
		<Icon icon="remove" />
	);
	const blockProps = useBlockProps({
		className: "lwhh-figure"
	});
	return (
		<figure { ...blockProps }>
			<div className='img-wrapper'>
			<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( image ) =>{
					setAttributes(
						{ 
							id: image.id,
							alt: image.title,
							imgSrc: (image.sizes.thumbnail && image.sizes.url ) || image.url

						}
					);
				}}
				multiple= {false}
				allowedTypes={ 'image/*' }
				value={ id }
				render={ ( { open } ) => (
					
						<div className='ctrl-btn-wrapper'>
						<Button variant="secondary"
							onClick={(open)}
							icon={ (id || imgSrc ) ?  ImageRefresh : ImageIcon }
						></Button>
						<Button variant="secondary"
							onClick={()=>setAttributes({ id: null, src: null})}
							icon={ImageRemove}
						></Button>
						</div>
					
					)
				 }
			/>
				
		</MediaUploadCheck>
		<img className='lwhh-figure__image' src={imgSrc} alt={alt} />
		</div>
		</figure>
		
	);
}
