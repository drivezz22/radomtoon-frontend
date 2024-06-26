import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HomeDummy from "../pages/HomeDummy";
const Header = lazy(() => import('../layouts/Header'))
const Footer = lazy(() => import('../layouts/Footer'))
const Landing = lazy(() => import('../pages/Landing'))
const LogIn = lazy(() => import('../pages/LogIn'))
const CreatorRegister = lazy(() => import('../pages/CreatorRegister'))
const Home = lazy(() => import('../pages/Home'))
const Campaign = lazy(() => import('../pages/Campaign'))
const Tier = lazy(() => import('../pages/SelectTier'))
const Payment = lazy(() => import('../pages/Payment'))
const SupporterPanel = lazy(() => import('../pages/SupporterPanel'))
const CreatorPanel = lazy(() => import('../pages/CreatorPanel'))
const AdminPanel = lazy(() => import('../pages/AdminPanel'))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <div className="min-h-[80vh]">
          <Outlet />
        </div>
        <Footer />
      </>
    ),
    children: [
      { path: "/landing", element: <Landing /> },
      { path: "/", element: <Home /> },
      { path: "/login", element: <LogIn /> },
      { path: "/register", element: <CreatorRegister /> },

      { path: "/campaign/:productId", element: <Campaign /> },
      { path: "/campaign/:productId/tier/:tierId/payment", element: <Payment /> },
      { path: "/campaign/:productId/tiers", element: <Tier /> },

      { path: "/supporter/:supporterId", element: <SupporterPanel /> },
      { path: "/creator/:creatorId", element: <CreatorPanel /> },
      { path: "/admin-panel", element: <AdminPanel /> },
      { path: "/homedummy", element: <HomeDummy /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
