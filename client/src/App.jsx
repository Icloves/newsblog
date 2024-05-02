import React, { Children, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
// import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import NewsPage from './components/pages/NewsPage';
import SignUpPage from './components/pages/SignUpPage';
// import AccountPage from './components/pages/AccountPage';
// import OneMessagePage from './components/pages/OneMessagePage';
import axiosInstance, { setAccessToken } from './axiosInstance';
// import ProtectedRoute from './components/hoc/ProtectedRoute';
// import Loader from './components/hoc/Loader';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axiosInstance('/tokens/refresh').then((res) => {
      const { user: newUser, accessToken } = res.data;
      setUser(newUser);
      setAccessToken(accessToken);
    }).catch(() => {
      setUser(null);
    });
  }, []);

  const loginHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const res = await axiosInstance.post('/login', formData);
    const { data } = res;
    setUser(data.user);
    setAccessToken(data.accessToken);
  };

  const signupHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const res = await axiosInstance.post('/signup', formData);
    const { data } = res;
    setUser(data.user);
    setAccessToken(data.accessToken);
  };

  const logoutHandler = async () => {
    await axiosInstance('/logout');
    console.log('Я РАБОТАЮ');
    setUser(null);
    setAccessToken('');
  };

  const routes = [{
    element: <Layout user={user} logoutHandler={logoutHandler} />,
    children: [
      {
        path: '/login',
        element: <LoginPage loginHandler={loginHandler} />,
      },
      {
        path: '/signup',
        element: <SignUpPage signupHandler={signupHandler} />,
      },
      {
        path: '/news',
        element: <NewsPage user={user} />,
      },
    ],

  }];

  const router = createBrowserRouter(routes);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
