import { IListProps } from "./props";
import './index.css';

const Index: React.FC<IListProps> = ({
  data, listItem: ListItem
}) => {
  // Abaixo, 'bypassa' botão para actionButton do item. #3
  return (<ul className='list'>
    {data.map(item => <ListItem key={item.text} text={item.text} />)}
  </ul>);
};

export default Index;
