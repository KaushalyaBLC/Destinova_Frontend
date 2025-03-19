import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import NovaPage from './pages/NovaPage.jsx';
import NovaForm from './pages/NovaForm.jsx';
import CareerVision from './pages/CareerVision.jsx';
import Industry from './components/Industry.jsx';
import ClusterPage from './pages/ClusterPage.jsx';
import WisdomGateway from './pages/WisdomGateway.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <HomePage/>
    ),
  },
  {
    path: "/meet-nova",
    element: (
        <NovaPage/>
    ),
  },
  {
    path: "meet-nova/form",
    element: (
        <NovaForm/>
    ),
  },
  {
    path: "career-vision",
    element: (
        <CareerVision/>
    ),
  },
  {
    path: "career-vision/:industry",
    element: (
        <Industry/>
    ),
  },
  {
    path: "career-vision/industry/:cluster",
    element: (
        <ClusterPage/>  
    ),
  },
  {
    path: "wisdom-gateway",
    element: (
        <WisdomGateway/>
    ),
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
