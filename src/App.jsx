
import './App.css'
import Home from './homepage/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homee from "./homepage/component/top/homee"
import Products from "./homepage/component/top/products"
import Contactus from "./homepage/component/top/contactus"
import Login from "./homepage/component/top/login"
import Signup from "./homepage/component/top/signup"
import Trial from "./homepage/component/bottom/trial"
import Premium from "./homepage/component/bottom/premium"
import Welcome from "./homepage/nextpage/welcome"


const router= createBrowserRouter([
  {
    path:"/",
    element: <Home/>


  },
  {
    path:"/homee",
    element: <Homee/>


  },
  {
    path:"/products",
    element:<Products/>

  },
  {
    path:"/contactus",
    element:<Contactus/>

  },
  {
    path:"/login",
    element:<Login/>

  },
  {
    path:"/signup",
    element:<Signup/>

  },
  {
    path:"/trial",
    element:<Trial/>

  },
  {
    path:"/premium",
    element:<Premium/>

  },
  {
    path:"/welcome",
    element:<Welcome/>

  }
])

function App() {

  return (

 <RouterProvider router={router} />



  )
}

export default App
