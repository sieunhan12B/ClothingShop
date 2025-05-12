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
  const { showNotification } = useContext(NotificationContext);

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Tăng dần{" "}
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Giảm dần{" "}
        </a>
      ),
    },
  ];

  useEffect(() => {
    sanPhamService
      .getProductByCategoryId(id_category)
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
          <div className="grid grid-cols-5 gap-4 mb-8">
            {products.map((item, index) => (
              <div key={index} className="text-center">
                <Link to={`/product-detail/${item.id_product}`}>
                  <img
                    src={item.gallery?.thumbnail[0]}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <p className="mt-2">{item.title}</p>
                  <p className="text-red-500 font-bold">{item.price}</p>
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
