import { createBrowserRouter } from 'react-router-dom'
// import App from '../../App';
import Root from '../Root/Root';
import Home from '../Home/Home';
import Coffees from '../Coffees/Coffees';
import Dashboard from '../Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('./categories.json'),
        children:[
          {
            path:'/category',

          }
        ] 
      },
      {
        path:'/coffees',
        element:<Coffees></Coffees>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ],
  },
])



export default router;