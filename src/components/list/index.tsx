import { IListProps } from "./props";
import './index.css';

const Index: React.FC<IListProps> = ({
  data, listItem: ListItem
}) => {
  return (<ul className='list'>
    {data.map(item => <ListItem key={item.id} model={item} />)}
  </ul>);
};

export default Index;
