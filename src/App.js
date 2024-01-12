import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
import  { useUserContext } from './UserContext';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signin from './Pages/Signin/Sigin';
import Signup from './Pages/Signup/Signup';
import { useNavigate } from "react-router-dom";


function App() {
  const {isauth} = useUserContext();
  console.log(isauth);
  const router = createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/signin',element:<Signin/>},
    {path:'/signup',element:<Signup/>}
  ])
  // const navigate = useNavigate();
  // if(!isauth){
  //   return navigate('/signin');
  // }
  return ( 
  <div className="App">
    <h4 style={{  textAlign:'center'}}>Twitter</h4>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
