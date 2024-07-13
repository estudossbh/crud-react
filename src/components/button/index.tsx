import React from 'react';
// import { colorType } from '../../shared/consts';
import './index.css';
import { IButtonProps } from './props';

const Button: React.FC<IButtonProps> = ({
	type, variant, disabled, text, onClick, ...props
}) => {
	let classNameList = '';

	const handleClick = () => {
		onClick && onClick();
	};

	const renderContent = () => {
		if(text && !props.icon) {
			return <span>{text}</span>;
		}

		if(!text && props.icon) {
			return <props.icon size={24} />;
		}

		if (text && props.icon) {
			return (<div className='button-content'>
				<props.icon size={20} weight='bold' />
				<span>{text}</span>
			</div>);
		}
	};

	if (disabled) {
		classNameList = 'disabled';
	}

	if(variant) {
		classNameList += ` ${variant}`;
	}

	return(<button type={type} className={classNameList} disabled={disabled} onClick={type === 'submit' ? undefined : handleClick}>
		{renderContent()}
	</button>);
};

export default React.memo(Button);
