import React from 'react';
import './index.css';

interface IProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Index = React.forwardRef<any, IProps>(({
	checked, indeterminate, onChange
}, ref) => {
	let className = 'checkmark';

	if(!!indeterminate) {
		className = 'identerminate';
	}

	return (<div id='container'>
		<label id='label'>
			<input id='checkbox'
				ref={ref}
				type="checkbox" 
				checked={checked} 
				onChange={onChange} />
			<span className={className} />
		</label>
	</div>);
});

export default Index;
