import { useRoutes } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";

function App() {
  const element = useRoutes([
     {
       path:'/login',
       element: <LoginPage/>
     },
     {
      path:'/signup',
      element: <SignUpPage/>
    },
    {
      path:'/',
      element: <HomePage/>
    }
  ])


  return element
}

export default App;
