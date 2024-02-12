import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
export default function save({attributes}) {
	const blockProps = useBlockProps.save(
		{
			className: `lwhh-card-two lwhh-card-two--figure-${ attributes.imagePosition }`,
			style: {
				borderRadius: attributes.cardRadius + 'px'
			}
		}
	);
	const {imgSrc, alt, label} = attributes;
	return (
		<div { ...blockProps } >
			<div className="lwhh-card-two-figure">
				<img src={imgSrc} alt={alt}  />
				<div className={`lwhh-label lwhh-label--${attributes.labelPosition}`}>
					{label}
				</div>
			</div>
			<div className="lwhh-card-two-body">
					<InnerBlocks.Content />
			</div>
		</div>
	);
}
