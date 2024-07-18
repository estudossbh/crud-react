import React from 'react';
import { ITextProps } from './props';
import './index.css';

const Index: React.FC<ITextProps> = ({
  value, color
}) => {
  let classNameList = 'text';

  if (color) {
		classNameList += ` text-color-${color}`;
	}

  return(<span className={classNameList}> {value} </span>);
}

export default Index;