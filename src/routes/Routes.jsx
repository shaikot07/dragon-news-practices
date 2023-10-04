
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/register/Register';
import NewsDitils from '../pages/newsDitals/NewsDitils';
import PrivateRout from '../privateRoute/PrivateRout';

const routes = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>,
                  loader:() => fetch('/news.json')
            },
            {
                  path:'/news/:id',
                  element:<PrivateRout><NewsDitils></NewsDitils></PrivateRout>
            },
            {
                  path:'/login',
                  element:<Login></Login>
            },
            {
                  path:'/register',
                  element:<Register></Register>
            },
        ]
      },
    ]);

export default routes;