import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';

export const routes = [
  { path: '/',  element: <Home /> },
  { path: '/create',  element: <Create /> },
]

export const router = createBrowserRouter(routes);