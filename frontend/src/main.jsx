import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import { Layout } from './Layout.jsx'
import { Home } from '../components/Home/Home.jsx'
import { About } from '../components/About/About.jsx'
import { Rules } from '../components/Rules/Rules.jsx'
import { Warground } from '../components/Warground/Warground.jsx'
import { Login } from '../components/Login/Login.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/rules",
        element:<Rules></Rules>
      },
      {
        path:"/warground",
        element:<Warground></Warground>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
