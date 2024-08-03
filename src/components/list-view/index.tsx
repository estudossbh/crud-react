import React from 'react';
import { IListProps, IResponse } from "./props";
import './index.css';
import axios from 'axios';

const Index: React.FC<IListProps> = ({
  url, listItem: ListItem
}) => {
  const [response, setResponse] = React.useState<IResponse[]>();
  const [isLoading, setIsLoading] = React.useState(false);

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
