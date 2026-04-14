import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root';
import Home from './page/home/Home';
import Timeline from './page/timeline/Timeline';
import Stats from './page/stats/Stats';
import FriendsDetails from './page/friendsDetails/FriendsDetails';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
     children:[
    {
      index:true,
      Component:Home
    },
    {
      path:"/timeline",
      Component:Timeline
    },
    {
      path:"/stats",
      Component:Stats,
    },
    {
      path:"/friendsdetails/:id",
      Component:FriendsDetails,
    },
   
  


  ],
  // errorElement:<h1> This page not found 404</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
