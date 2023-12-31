import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// pages the router will use to conditionally show the appropriate views
import App from './App.jsx';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

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
      }
    ]
  }
]);

// render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  < RouterProvider router={ router } />
);
