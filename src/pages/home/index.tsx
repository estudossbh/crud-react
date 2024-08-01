import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import './index.css';
import List from '../../components/list';
import { Trash } from 'phosphor-react';
import CheckBox from '../../components/checkbox';
import ListItem from '../../components/list-item';
import Text from '../../components/text';
import { IBaseModel, IListItemProps } from '../../components/list-item/props';
import axios from 'axios';

interface IResponse extends IBaseModel {
  descricao: string;
  dataConclusao: string;
  isConcluido: boolean;
}

const ListItem1: React.FC<IListItemProps<IResponse>> = ({
   model, ...props
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }

  const handleClickDelete = () => {
    axios
      .delete('https://localhost:7130/todo/' + model.id)
      .then(resp => console.log('deu certo'))
      .catch(error => console.log('deu ruim'));
  }

  return (<ListItem model={model} {...props}>
    <CheckBox checked={checked} onChange={handleChangeCheck} />
    <Text value={model.descricao} />
    <Button type='button' icon={Trash} color='primary' onClick={handleClickDelete} />
  </ListItem>);
}

const Index = () => {
  const [value, setValue] = React.useState('');
  const [response, setResponse] = React.useState<IResponse[]>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  React.useEffect(() => {
    axios
      .get('https://localhost:7130/todo')
      .then(resp => setResponse(resp.data))
      .catch(error => console.log('deu ruim'));
  }, []);

  const data = response ? response : [];

  return (<div id='home-container'>
    <div className='home-main'>
      <div className='home-header'>
        <Input value={value} onChange={handleChange} />
        <Button type='button' text='Add' color='primary' />
      </div>
      <div className='home-content'>
        <List data={data} listItem={ListItem1} />
      </div>
    </div>
  </div>);
};

export default Index;