import React, { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { path } from "../common/path.js";
import HomePage from "../pages/HomePage/HomePage";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage.jsx";
import AdminTemplate from "../templates/AdminTemplate/AdminTemplate.jsx";
import ManagerUserPage from "../pages/ManagerUserPage/ManagerUserPage.jsx";
import ManagerProductPage from "../pages/ManagerProductPage/ManagerProductPage.jsx";

const UseRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.homePage,
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: path.productPage,
          element: <ProductPage />,
        },
        {
          path: path.productDetailPage,
          element: <ProductDetailPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminTemplate />,
      children: [
        {
          path: path.managerUserPage,
          element: <ManagerUserPage />,
        },
        {
          path: path.managerProductPage,
          element: <ManagerProductPage />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: path.logIn,
      element: <LoginPage />,
    },
  ]);
  return routes;
};

export default UseRoutesCustom;
