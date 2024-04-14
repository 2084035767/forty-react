import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Home = lazy(() => import('@/pages/home/index.jsx'))
const Login = lazy(() => import('@/pages/login/index.jsx'))
const Validate = lazy(() => import('@/pages/register/validate.jsx'))
const Register = lazy(() => import('@/pages/register/index.jsx'))
const Forget = lazy(() => import('@/pages/forget/index.jsx'))
const Reset = lazy(() => import('@/pages/forget/reset.jsx'))
const NotFound = lazy(() => import('@/pages/error/404.jsx'))
const Layout = lazy(() => import('@/layouts/index.jsx'))
export default function Router() {
  const errorRouter = [
    {
      path: '*',
      element: <NotFound />,
    },
    {
      path: '/404',
      element: <NotFound />,
    },
  ]

  let baseRouter = [
    {
      index: true,
      element: <Home />,
    },
    {
      path: '',
      element: <Home />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/validate',
      element: <Validate />,
    },
    {
      path: '/forget',
      element: <Forget />,
    },
    {
      path: '/reset',
      element: <Reset />,
    },

    // {
    //   path: '/redirect',
    //   lazy: () => import('@/pages/layout/Redirect'),
    // },
  ]

  const router = createBrowserRouter([...errorRouter, ...baseRouter])

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
