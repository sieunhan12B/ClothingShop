import React, { useState } from "react";
import { path } from "../../common/path";
import { Link } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import "antd/dist/reset.css";
const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link to="/" className="text-3xl font-bold text-red-500">
        JUNO
      </Link>
      <nav className="flex-1 flex justify-center items-center space-x-4">
        <Link to={"/"} className="text-sm uppercase hover:underline">
          Hàng Mới
        </Link> 
        <Link
          to={path.productPage}
          className="text-sm uppercase hover:underline"
        >
          Sản Phẩm
        </Link>
        <Link
          to={"/admin/manager-user"}
          className="text-sm uppercase hover:underline"
        >
          Bớt Hơn 50%
        </Link>
        <a href="#" className="text-sm uppercase hover:underline">
          Sale Gần Đáy
        </a>
        <a href="#" className="text-sm uppercase hover:underline">
          Showroom
        </a>
        <a href="#" className="text-sm uppercase hover:underline">
          Thẻ
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <i
            className="fas fa-search cursor-pointer"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          ></i>
          {isSearchVisible && (
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              style={{ width: "200px" }}
            />
          )}
          <i className="fas fa-shopping-cart"></i>
        </div>
        <UserMenu to={path.logIn} iconStyle={{ fontSize: "20px", cursor: "pointer" }} />
      </div>
      
    </header>
  );
};

export default Header;
