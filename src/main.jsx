import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// pages the router will use to conditionally show the appropriate views
import App from './App.jsx';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ResumePage from './pages/ResumePage/ResumePage';

// define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: '/about',
        element: <AboutPage/>,
      },
      {
        path: '/contact',
        element: <ContactPage/>,
      },
      {
        path: '/projects',
        element: <ProjectPage/>,
      },
      {
        path: '/resume',
        element: <ResumePage/>,
      }
    ]
  }
]);

// render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  < RouterProvider router={ router } />
);
