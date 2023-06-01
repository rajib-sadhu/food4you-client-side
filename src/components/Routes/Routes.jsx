import { createBrowserRouter,} from "react-router-dom";
  import Main from '../Layout/Main/Main';
  import Home from '../Pages/Home/Home';
  import ErrorPage from '../Layout/ErrorPage/ErrorPage';
  import Blog from '../Pages/Blog/Blog';
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import LoginPage from "../Pages/Login/LoginPage";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          loader: ({params}) => fetch(`https://recipe-hunter-server-side-rajib-sadhu.vercel.app/chefs`)
        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
          path:'/chef-details/:id',
          element:<PrivateRoute><ChefDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`https://recipe-hunter-server-side-rajib-sadhu.vercel.app/chefs/${params.id}`)
        },
        {
          path:'/login',
          element:<LoginPage/>,
          children:[
            {
              path:'/login',
              element:<SignIn/>
            },
            {
              path:'/login/signin',
              element:<SignIn/>
            },
            {
              path:'/login/signup',
              element:<SignUp/>
            },
          ]
        },
      ]
    },
  ]);