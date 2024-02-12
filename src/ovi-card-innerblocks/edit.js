import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck, RichText, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	Icon,
	PanelBody,
	RangeControl,
	SelectControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {id, imgSrc, alt, cardRadius, labelRadius } = attributes;
	const ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/button']
	const CARD_TEMPLATE = [
		[ 'core/heading', { placeholder: 'Card Title' } ],
		[ 'core/paragraph', { placeholder: 'Summary' } ],
		[ 'core/button', { placeholder: 'Button Text' }],
	];
	
	const blockProps = useBlockProps(
		{
			className: `lwhh-card-two lwhh-card-two--figure-${ attributes.imagePosition }`,
			style: {
				borderRadius: cardRadius + 'px'
			}
		}
	);

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
		<PanelBody title={__('Card')}>
		<RangeControl
            label={__("Border Radius")}
            value={ cardRadius }
            onChange={ ( value ) => setAttributes( {cardRadius: value} ) }
            min={ 0 }
            max={ 50 }
        />
		</PanelBody>
		<PanelBody title={__('Label')}>
		<RangeControl
            label={__("Label Radius")}
            value={ labelRadius }
            onChange={ ( value ) => setAttributes( {labelRadius: value} ) }
            min={ 0 }
            max={ 50 }
        />
		</PanelBody>
		</InspectorControls>
		<div  { ...blockProps }>
			<div className="lwhh-card-two-figure">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( image ) =>{
							setAttributes(
								{ 
									id: image.id,
									alt: image.title,
									imgSrc: image.url

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
				<div className={`lwhh-label lwhh-label--${attributes.labelPosition}`} style={{borderRadius: labelRadius+'px'}}>
					<RichText
						value={ attributes.label } 
						onChange={ ( label ) => setAttributes( { label } ) }
						placeholder={ __( '$ price' ) }
						keepPlaceholderOnFocus
					/>
				</div>
			</div>
			<div className="lwhh-card-two-body">
				<InnerBlocks 
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ CARD_TEMPLATE }
				/>
			</div>
		</div>
		</>
	);
}
