import React, { Children, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
// import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import NewsPage from './components/pages/NewsPage';
// import SignupPage from './components/pages/SignupPage';
// import AccountPage from './components/pages/AccountPage';
// import OneMessagePage from './components/pages/OneMessagePage';
// import axiosInstance, { setAccessToken } from './axiosInstance';
// import ProtectedRoute from './components/hoc/ProtectedRoute';
// import Loader from './components/hoc/Loader';

function App() {
  const [count, setCount] = useState();

  const routes = [{
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
    ],

  }];

  const router = createBrowserRouter(routes);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
