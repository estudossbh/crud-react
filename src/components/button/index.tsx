import React from 'react';
import './index.css';
import { IButtonProps } from './props';

const Button: React.FC<IButtonProps> = ({
	type, color, variant, disabled, text, onClick, ...props
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
		classNameList = 'disabled' + (color ? `-${color}` : '');
	}

	if(variant) {
		classNameList += ` ${variant}`;
	}

	if (color) {
		classNameList += ` button-color-${color}`;
	}

	return(<button type={type} className={classNameList} disabled={disabled} onClick={type === 'submit' ? undefined : handleClick}>
		{renderContent()}
	</button>);
};

export default React.memo(Button);
