import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { PATH } from '../utils/index';
import { Home } from '../pages/public/index';

const router = createBrowserRouter([
  {
    path: PATH.APP,
    element: <App />,
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
    ],
  },
]);

export default router;
