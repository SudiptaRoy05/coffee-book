import { createBrowserRouter } from 'react-router-dom'
// import App from '../../App';
import Root from '../Root/Root';
import Home from '../Home/Home';
import Coffees from '../Coffees/Coffees';
import Dashboard from '../Dashboard/Dashboard';
import CoffeeCards from '../CoffeeCards/CoffeeCards';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element:<CoffeeCards></CoffeeCards>,
            loader:()=> fetch('../coffees.json'),
          },
          {
            path: '/category/:category',
            element:<CoffeeCards></CoffeeCards>,
            loader:()=> fetch('../coffees.json'),
          },
         
        ],
      },
      {
        path:'/coffees',
        element:<Coffees></Coffees>,
        loader:()=>fetch('../coffees.json'),
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ],
  },
])



export default router;