import React from 'react';
import Button from "../../components/button";
import Input from "../../components/input";
import axios from 'axios';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleClickSalvar = () => {
    const body = { descricao: value };

    axios
      .post('https://localhost:7130/todo', body)
      .then(resp => navigate('/'))
      .catch(error => console.log('deu ruim'));
  }

  return (<div className='create-container'>
    <Input value={value} onChange={handleChange} />
    <div className='create-submit-area'>
      <Button type='button' text='Cancelar' color='primary' variant='outlined' />
      <Button type='button' text='Salvar' color='primary' onClick={handleClickSalvar} />
    </div>
  </div>);
}

export default Index;