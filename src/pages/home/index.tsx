import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import './index.css';
import List from '../../components/list';
import { Trash } from 'phosphor-react';
import { IButtonProps } from '../../components/button/props';

// Componente Botao Criado
// Aqui se especifica que ele vai receber estas props. #1
const ButtonDelete: React.FC<IButtonProps> = ({
  ...props
}) => {
  return (<Button {...props} icon={Trash} color='primary' />);
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
          { text: 'Acordar cedo1', actionButton: ButtonDelete },
          { text: 'Acordar cedo2', actionButton: ButtonDelete },
          { text: 'Acordar cedo3', actionButton: ButtonDelete },
          { text: 'Acordar cedo4', actionButton: ButtonDelete },
          { text: 'Acordar cedo5', actionButton: ButtonDelete },
          { text: 'Acordar cedo6', actionButton: ButtonDelete },
          { text: 'Acordar cedo7', actionButton: ButtonDelete }
        ]} />
      </div>
    </div>
  </div>);
};

export default Index;