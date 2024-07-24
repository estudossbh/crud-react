import Text from '../text';
import { IListItemProps } from './props';
import './index.css';

const Index: React.FC<IListItemProps> = ({
  text, actionButton: ActionButton
}) => {
  const handleClick = (id: string) => {
    console.log(id + 'teste boladao');
  }

  // Aqui de fato renderiza o botão. #5
  // É neste ponto que de fato se tem as props informadas com seus respectivos valores (#1)
  return (<li className='list-item'>
    <Text value={text} />
    {ActionButton && <ActionButton type='button' onClick={() => handleClick(text)} />}
  </li>);
};

export default Index;
