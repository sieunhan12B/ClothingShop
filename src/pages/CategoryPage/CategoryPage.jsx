import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanPhamService } from "../../services/sanPham.service";
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { NotificationContext } from "../../App";

const CategoryPage = () => {
  const { id_category } = useParams();
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    sanPhamService
      .getProductByCategory(id_category, { limit: 100 })
      .then((res) => {
        console.log(res.data.data);
        showNotification("Lấy danh sách sản phẩm thành công", "success", 2000);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.error(err.response.data.message, err);
        showNotification(err.response.data.message, "error", 2000);
      })
      .finally(() => {
        console.log("Fetch products by category completed");
      });
  }, [id_category]);

  // Hàm sắp xếp sản phẩm theo giá
  const handleSort = (order) => {
    setSortOrder(order);
    setProducts((prev) => {
      const sortedProducts = [...prev];
      if (order === "asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (order === "desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      return sortedProducts;
    });
  };

  const items = [
    {
      key: "1",
      label: "Tăng dần",
      onClick: () => handleSort("asc"),
    },
    {
      key: "2",
      label: "Giảm dần",
      onClick: () => handleSort("desc"),
    },
  ];

  return (
    <main className="flex-1">
      {/* Top Sale Phái Mạnh Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-4">
            {products[0]?.category.name}
          </h2>
          <p className="text-center">{products.length} sản phẩm</p>
          <div className="text-right my-5">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Tùy chọn <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="grid grid-cols-4 gap-8 mb-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Link to={`/product-detail/${item.id_product}`}>
                  <div className="relative w-full h-48">
                    <img
                      src={item.gallery?.thumbnail[0]}
                      alt={item.title}
                      className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 hover:opacity-0"
                    />
                    <img
                      src={
                        item.gallery?.thumbnail[1] || item.gallery?.thumbnail[0]
                      }
                      alt={item.title}
                      className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="mt-2 text-gray-800 font-medium">
                      {item.title}
                    </p>
                    <p className="text-red-500 font-bold">{item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
