import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import Main from './layout/main';

const App = () => {
  return (<Main>
    <RouterProvider router={router} />
  </Main>);
}

export default App;
