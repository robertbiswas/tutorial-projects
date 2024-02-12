
export default function save({attributes}) {
	const {imgSrc, alt, label,title, content, btnText} = attributes;
	return (
		<div className={ `lwhh-card lwhh-card--figure-${attributes.imagePosition} `}>
			<div className="lwhh-card-figure">
				<img src={imgSrc} alt={alt} />
				<div className={`lwhh-label lwhh-label--${attributes.labelPosition}`}>
					{label}
				</div>
			</div>
			<div className="lwhh-card-body">
					<h2 className='lwhh-card-title'>{title}</h2>
					<div className="lwhh-card-text">
						<p>{content}</p>
					</div>
					<a className='lwhh-card-btn' >{btnText}</a>
				</div>
		</div>
	);
}
