import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import Text from '../../components/text';
import './index.css';

const Index = () => {
  var [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (<div id='home-container'>
    <div className='home-main'>
      <div className='home-header'>
        <Input value={value} onChange={handleChange} />
        <Button type='button' text='Add' color='primary' />
      </div>
      <div className='home-content'>
        <div> <Text value='Acordar cedo pq sim' /></div>
        <div> <Text value='Estudar react' /> </div>
        <div> <Text value='Estudar c#' /> </div>
      </div>
    </div>
  </div>);
};

export default Index;