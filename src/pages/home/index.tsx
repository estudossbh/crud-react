import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import './index.css';
import List from '../../components/list';
import { Trash } from 'phosphor-react';
import CheckBox from '../../components/checkbox';
import ListItem from '../../components/list-item';
import Text from '../../components/text';
import { IListItemProps } from '../../components/list-item/props';

const ListItem1: React.FC<IListItemProps> = ({
   ...props
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event.target.checked', event.target.checked);
    setChecked(event.target.checked);
  }

  return (<ListItem {...props}>
    <CheckBox checked={checked} onChange={handleChangeCheck} />
    <Text value={props.text} />
    <Button type='button' icon={Trash} color='primary' />
  </ListItem>);
}

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
        {/* Abaixo, se informa o botao para cada elemento da lista. #2 */}
        <List data={[
          { text: 'Acordar cedo1' },
          { text: 'Acordar cedo2' },
          { text: 'Acordar cedo3' },
          { text: 'Acordar cedo4' },
          { text: 'Acordar cedo5' },
          { text: 'Acordar cedo6' }
        ]} listItem={ListItem1} />
      </div>
    </div>
  </div>);
};

export default Index;