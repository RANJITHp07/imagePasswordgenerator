import { useRoutes } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import PrivateRoute from "./Component/PrivateRoute";

function App() {
  const element = useRoutes([
     {
       path:'/login',
       element: <PrivateRoute><LoginPage/></PrivateRoute>
     },
     {
      path:'/signup',
      element: <SignUpPage/>
    },
    {
      path:'/',
      element:  <PrivateRoute><HomePage/></PrivateRoute>
    }
  ])


  return element
}

export default App;
