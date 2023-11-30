import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header, Footer } from "../components";

const Home = lazy(() => import('../pages/Home.tsx'));
const DetailsWeather = lazy(() => import('../pages/DetailsWeather.tsx'));

// LAYOUT
const Layout = () => {
  return (
    <Suspense>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  )
}

// ROUTES
const routes = [
  {
    element: <Layout/>,
    children: [ { path: '/', element: <Home /> }, { path: '/details/:city', element: <DetailsWeather /> }]
  }
  ]

// BROWSER ROUTER
const router = createBrowserRouter(routes)

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter