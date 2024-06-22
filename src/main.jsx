// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {}
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header.jsx';
import Trending from './Pages/Trending.jsx';
import Main from './components/Main.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Main/>
      },
      {
        path:"/header",
        element:<Header/>,
      },
      {
        path:"/trending-books",
        element:<Trending/>,
      },
      {
        path:"/newrelease",
        element:<Header/>,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />
  
)
