import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { path } from "../../common/path";
import { Link } from "react-router-dom";
const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="text-3xl font-bold text-red-500">JUNO</div>
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
        <Link to={path.logIn}>
          <UserOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
