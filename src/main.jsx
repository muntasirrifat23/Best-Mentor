import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Component/Home/Home';
import TeamPage from './Component/TeamPage/TeamPage';
import Mentor from './Component/Mentor/Mentor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <TeamPage></TeamPage>
      },
      {
        path: '/mentor',
        element: <Mentor></Mentor>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
