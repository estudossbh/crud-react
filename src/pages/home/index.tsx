import React from 'react';
import Input from '../../components/input';
import './index.css';
import Button from '../../components/button';

const Index = () => {
  var [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (<div id='home-container'>
    <div className='home-main'>
      <div className='home-header'>
        <Input value={value} onChange={handleChange} />
        <Button type='button' variant='simple' text='Add' />
      </div>
      <div className='home-content'>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
    </div>
  </div>);
};

export default Index;