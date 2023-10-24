import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

// pages the router will use to conditionally show the appropriate views
import App from './App.jsx';
import AboutPage from '../pages/AboutPage/AboutPage.jsx';
import ContactPage from '../pages/ContactPage/ContactPage.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import ProjectPage from '../pages/ProjectPage/ProjectPage.jsx';
import ResumePage from '../pages/ResumePage/ResumePage.jsx';

// define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'about',
        element: <AboutPage/>,
      },
      {
        path: 'contact',
        element: <ContactPage/>,
      },
      {
        path: 'error',
        element: <ErrorPage/>,
      },
      {
        path: 'projects',
        element: <ProjectPage/>,
      },
      {
        path: 'resume',
        element: <ResumePage/>,
      }
    ]
  }
]);

// render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  < RouterProvider router={ router } />
);
