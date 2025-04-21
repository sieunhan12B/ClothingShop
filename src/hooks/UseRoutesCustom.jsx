import React, { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { path } from "../common/path.js";
import HomePage from "../pages/HomePage/HomePage";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";

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
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return routes;
};

export default UseRoutesCustom;
