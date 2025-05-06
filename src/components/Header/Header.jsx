import React, { useState, useRef, useEffect } from "react";
import { path } from "../../common/path";
import { Link } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import "antd/dist/reset.css";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";

const Header = () => {
  return (
    <>
      <header className="flex fixed w-full z-50 bg-white justify-between items-center p-4 border-b">
        <Link to="/" className="text-3xl font-bold text-red-500">
          BAOANH
        </Link>
        <nav className="flex-1 flex justify-center items-center ml-32 space-x-4">
          <Link
            to={path.productPage}
            className="text-sm uppercase hover:underline"
          >
            Sản Phẩm
          </Link>

          <Link
            to={path.showRoom}
            className="text-sm uppercase hover:underline"
          >
            Showroom{" "}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <FormSearchProduct />

          <div className="flex items-center space-x-2">
            <i className="fas fa-shopping-cart"></i>

            <UserMenu
              to={path.logIn}
              iconStyle={{ fontSize: "20px", cursor: "pointer" }}
            />
          </div>
        </div>
      </header>
      <div className="h-20"></div>
    </>
  );
};

export default Header;
