import { InspectorControls, MediaUpload, MediaUploadCheck, RichText, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	Icon,
	PanelBody,
	SelectControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {id, imgSrc, alt} = attributes;
	const blockProps = useBlockProps();
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
		<>
		<InspectorControls>
		<PanelBody title={ __( 'Image Position' ) }>
			<SelectControl
				label="Image Position"
				value={ attributes.imagePosition }
				options={ [
					{ value: 'top', label: 'Top' },
					{ value: 'left', label: 'Left' },
					{ value: 'right', label: 'Right' }
				] }
				onChange={ (imagePosition) => setAttributes({imagePosition}) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Label' ) }>
			<SelectControl
				label="Label Position"
				value={ attributes.labelPosition }
				options={ [
					{ value: 'top-left', label: 'Top Left' },
					{ value: 'top-right', label: 'Top Right' },
					{ value: 'top-center', label: 'Top Center' },
					{ value: 'middle-left', label: 'Middle Left' },
					{ value: 'middle-right', label: 'Middle Right' },
					{ value: 'middle-center', label: 'Middle Center' },
					{ value: 'bottom-left', label: 'Bottom Left' },
					{ value: 'bottom-right', label: 'Bottom Right' },
					{ value: 'bottom-center', label: 'Bottom Center' },
					
					
				] }
				onChange={ (labelPosition) => setAttributes({labelPosition}) }
			/>
		</PanelBody>
		</InspectorControls>
		<div className={ `lwhh-card lwhh-card--figure-${attributes.imagePosition} `}>
			<div className="lwhh-card-figure">

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
									onClick={()=>{setAttributes({ id: null, imgSrc: null}); console.log('pitu')}}
									icon={ImageRemove}
								></Button>
							</div>
							)
						}
					/>
						
				</MediaUploadCheck>
				<img src={imgSrc} alt={alt} />
				<RichText
					tagName= "div"
					className={`lwhh-label lwhh-label--${attributes.labelPosition}`}
					value={ attributes.label } 
					onChange={ ( label ) => setAttributes( { label } ) }
					placeholder={ __( '$ price' ) }
					keepPlaceholderOnFocus
					/>
			</div>
			<div className="lwhh-card-body">
					<RichText
					tagName= "h2"
					className='lwhh-card-title'
					value={ attributes.title } 
					onChange={ ( title ) => setAttributes( { title } ) }
					placeholder={ __( 'Heading...' ) }
					keepPlaceholderOnFocus
					/>
				<div className="lwhh-card-text">
				<RichText
					tagName= "p"
					value={ attributes.content } 
					onChange={ ( content ) => setAttributes( { content } ) }
					placeholder={ __( 'Type your Card Content ...' ) }
					keepPlaceholderOnFocus
				/>
				</div>
				<RichText
					tagName= "a"
					className='lwhh-card-btn'
					value={ attributes.btnText } 
					onChange={ ( btnText ) => setAttributes( { btnText } ) }
					placeholder={ __( 'Button Text' ) }
					keepPlaceholderOnFocus
				/>
			</div>
		</div>
		</>
	);
}
