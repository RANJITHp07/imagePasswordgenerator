import { useRoutes } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import PrivateRoute from "./Component/PrivateRoute";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  const element = useRoutes([
     {
       path:'/login',
       element: <PrivateRoute><LoginPage/></PrivateRoute>
     },
     {
      path:'/signup',
      element: <PrivateRoute><SignUpPage/></PrivateRoute>
    },
    {
      path:'/',
      element:  <PrivateRoute><HomePage/></PrivateRoute>
    },

    {
      path:'/profile',
      element:  <PrivateRoute><ProfilePage/></PrivateRoute>
    }
  ])


  return element
}

export default App;
