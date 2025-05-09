import React, { useState, useEffect } from "react";
import { path } from "../../common/path";
import { Link } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import "antd/dist/reset.css";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";
import { danhMucService } from "../../services/danhMuc.service";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { removeVietnameseTones } from "../../utils/removeVietnameseTones";

const Header = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    danhMucService
      .getCategory()
      .then((res) => {
        console.log(res);
        // Lọc động các danh mục dựa trên từ khóa "Áo" và "Quần"
        const categorizedData = {
          Quần: res.data.data.filter((item) =>
            item.name.toLowerCase().includes("quần")
          ),
          Áo: res.data.data.filter((item) =>
            item.name.toLowerCase().includes("áo")
          ),
        };
        setCategories(categorizedData);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      })
      .finally(() => {
        console.log("Fetch categories completed");
      });
  }, []);

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
            <Dropdown
              dropdownRender={() => (
                <div className="bg-white rounded-lg shadow-lg p-4 max-h-60 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(categories).map(([type, items]) => (
                      <div key={type}>
                        <h4 className="font-semibold text-gray-700 mb-2">
                          {type}
                        </h4>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <Link
                              to={
                                "/category/" + removeVietnameseTones(item.name)
                              }
                              key={item.id_category}
                              className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer group"
                            >
                              <div>
                                <span className="text-gray-700">
                                  {item.name}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              placement="bottom"
              trigger={["hover"]}
            >
              <span className="flex items-center space-x-2 cursor-pointer py-3 lg:border-none border-b">
                <span className="font-medium">Sản phẩm</span>
                <DownOutlined style={{ fontSize: "12px" }} />
              </span>
            </Dropdown>
          </Link>

          <Link
            to={path.showRoom}
            className="text-sm uppercase hover:underline"
          >
            Showroom
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <FormSearchProduct />
          <div className="flex items-center space-x-2">
            <Link to={path.oderPage}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
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
