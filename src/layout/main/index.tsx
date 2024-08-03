import React, { PropsWithChildren } from 'react';
import './index.css';

const Index: React.FC<PropsWithChildren> = (props) => {
  console.log('render');

  return (<div id='home-container'>
    <div className='home-main'>
      {props.children}
    </div>
  </div>);
};

export default Index;