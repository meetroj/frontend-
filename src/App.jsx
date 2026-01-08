
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

const API = import.meta.env.VITE_API_URL;



const router= createBrowserRouter([
  {
    path:"/",
    element: <Home api={API}/>


  },
  {
    path:"/homee",
    element: <Homee api={API}/>


  },
  {
    path:"/products",
    element:<Products api={API}/>

  },
  {
    path:"/contactus",
    element:<Contactus api={API}/>

  },
  {
    path:"/login",
    element:<Login api={API}/>

  },
  {
    path:"/signup",
    element:<Signup api={API}/>

  },
  {
    path:"/trial",
    element:<Trial api={API}/>

  },
  {
    path:"/premium",
    element:<Premium api={API}/>

  },
  {
    path:"/welcome",
    element:<Welcome api={API}/>

  }
])

function App() {

  return (

 <RouterProvider router={router} />



  )
}

export default App
