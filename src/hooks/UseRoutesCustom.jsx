import React, { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { path } from "../common/path.js";
import HomePage from "../pages/HomePage/HomePage";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import SignUpPage from "../pages/SignUpPage/SignUpPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage.jsx";
import AdminTemplate from "../templates/AdminTemplate/AdminTemplate.jsx";
import ManagerUserPage from "../pages/ManagerUserPage/ManagerUserPage.jsx";
import ManagerProductPage from "../pages/ManagerProductPage/ManagerProductPage.jsx";
import MyAccountPage from "../pages/MyAccountPage/MyAccountPage.jsx";
import ShowRoomPage from "../pages/ShowRoomPage/ShowRoomPage.jsx";
import OderPage from "../pages/OderPage/OderPage.jsx";
import CategoryPage from "../pages/CategoryPage/CategoryPage.jsx";

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
        {
          path: path.myAccount,
          element: <MyAccountPage />,
        },
        {
          path: path.showRoom,
          element: <ShowRoomPage />,
        },
        {
          path: path.oderPage,
          element: <OderPage />,
        },
        {
          path: path.categoryPage,
          element: <CategoryPage />,
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
    ,
    {
      path: path.signUp,
      element: <SignUpPage />,
    },
  ]);
  return routes;
};

export default UseRoutesCustom;
