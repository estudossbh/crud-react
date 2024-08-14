import React from 'react';
import { IListProps, IResponse } from "./props";
import './index.css';
import axios from 'axios';
import Input from '../input';

const Index: React.FC<IListProps> = ({
  url, listItem: ListItem
}) => {
  const [response, setResponse] = React.useState<IResponse[]>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
  let timeoutId = React.useRef<NodeJS.Timeout>();
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => { 
      setIsLoading(true);
      axios
        .get(`https://localhost:7130/todo/search/` + event.target.value)
        .then(resp => {
          setResponse(resp.data);
          setIsLoading(false);
        })
        .catch(error => setIsLoading(false));
    }, 3000);

    setSearch(event.target.value);
  }

  const load = React.useCallback(() => {
    setIsLoading(true);

    axios
      .get(url)
      .then(resp => {
        setResponse(resp.data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
      });
  }, [url]);

  React.useEffect(load, [load]);

  return (<>
  <Input value={search} onChange={handleChange} />
  {isLoading 
    ? <h1> Carregando... </h1> 
    : (response && response.length 
      ? (<ul className='list'>
        {response.map(item => <ListItem key={item.id} model={item} onReload={load} />)}
      </ul>)
      : <h1> Sem registro </h1>)}
  </>);
};

export default Index;
