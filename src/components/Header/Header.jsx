import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2 text-xs sm:text-sm">
        <div className="flex items-center space-x-6">
          <a
            className="text-red-600 font-semibold text-sm sm:text-base"
            href="#"
          >
            JUNO
          </a>
          <nav className="hidden sm:flex space-x-4 text-gray-700 font-semibold">
            <a className="hover:text-red-600" href="#">
              HÀNG MỚI
            </a>
            <a className="hover:text-red-600" href="#">
              SẢN PHẨM
            </a>
            <a className="hover:text-red-600" href="#">
              BEST HÈ NONSTOP
            </a>
            <a className="text-red-600 font-bold" href="#">
              SALE
            </a>
            <a className="text-red-600 font-bold" href="#">
              SALE QUẦN ÁO
            </a>
            <a className="hover:text-red-600" href="#">
              SHOWROOM
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4 text-gray-600 text-xs sm:text-sm">
          <button aria-label="Search" className="hover:text-red-600">
            <i className="fas fa-search"></i>
          </button>
          <button aria-label="User Account" className="hover:text-red-600">
            <i className="far fa-user"></i>
          </button>
          <button aria-label="Shopping Cart" className="hover:text-red-600">
            <i className="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
