import { IListItemProps } from './props';
import './index.css';

const Index: React.FC<IListItemProps> = ({
  text, ...props
}) => {
  return (<li className='list-item'>
    {props.children}
  </li>);
};

export default Index;
