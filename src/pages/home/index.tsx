import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import './index.css';
import ListView from '../../components/list-view';
import { Trash } from 'phosphor-react';
import CheckBox from '../../components/checkbox';
import ListItem from '../../components/list-item';
import Text from '../../components/text';
import { IListItemProps } from '../../components/list-item/props';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IResponse } from '../../components/list-view/props';

const ListItem1: React.FC<IListItemProps<IResponse>> = ({
   model, onReload, ...props
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }

  const handleClickDelete = () => {
    axios
      .delete('https://localhost:7130/todo/' + model.id)
      .then(resp => {
        console.log('deu certo');
        onReload();
      })
      .catch(error => console.log('deu ruim'));
  }

  return (<ListItem model={model} onReload={onReload} {...props}>
    <CheckBox checked={checked} onChange={handleChangeCheck} />
    <Text value={model.descricao} />
    <Button type='button' icon={Trash} color='primary' onClick={handleClickDelete} />
  </ListItem>);
}

const Index = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleClick = () => {
    navigate('/create');
  }

  return (<>
    <div className='home-header'>
      <Button type='button' text='Adicionar' color='primary' onClick={handleClick} />
    </div>
    <div className='home-search'>
      <Input value={value} onChange={handleChange} />
      <Button type='button' text='Buscar' color='primary' />
    </div>
    <div className='home-content'>
      <ListView url='https://localhost:7130/todo' listItem={ListItem1} />
    </div>
  </>);
};

export default Index;