import React, { useContext, useEffect, useState } from "react";
import { sanPhamService } from "../../services/sanPham.service";
import { Link } from "react-router-dom";
import { path } from "../../common/path";
import { NotificationContext } from "../../App";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    sanPhamService
      .getAllProducts()
      .then((res) => {
        console.log(res.data.data);

        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        showNotification("Lỗi kết nối", "error", 2000);
      });
  }, []);

  return (
    <main className="flex-1">
      {/* Banner */}
      <section className="">
        <img
          src="./img/instagram5.jpg"
          alt="Banner"
          className="w-full h-96 object-cover"
        />
      </section>

      {/* Flash Sale Section
      <section className="py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            Flash Sale <span className="text-red-500">Mỗi Ngày</span>
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {[
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Giày Cao Gót Pump...",
                price: "649.000đ",
              },
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Sandal Gót Vuông...",
                price: "219.000đ",
              },
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Túi Xách Mini Hộp...",
                price: "549.000đ",
              },
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Túi Xách Tote Cán...",
                price: "279.000đ",
              },
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Giày Sandal Gót...",
                price: "219.000đ",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <p className="mt-2">{item.title}</p>
                <p className="text-red-500 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Recommendations Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Bộ Sưu Tập </h2>
          <div className="grid grid-cols-4 gap-4">
            {products.map((item, index) => (
              <Link to={`/product-detail/${item.id_product}`} key={index}>
                <div key={index} className="text-center">
                  <img
                    src={item.gallery.thumbnail[0]}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <p className="mt-2">{item.title}</p>
                  <p className="text-red-500 font-bold">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Instagram</h2>
          <p className="text-center text-sm mb-6">@BAOANH.vn</p>
          <div className="grid grid-cols-4 gap-4">
            <img
              src="./img/instagram5.jpg"
              alt="Instagram 1"
              className="w-full  object-cover"
            />
            <img
              src="./img/instagram6.jpg"
              alt="Instagram 2"
              className="w-full  object-cover"
            />
            <img
              src="./img/instagram7.jpg"
              alt="Instagram 3"
              className="w-full  object-cover"
            />
            <img
              src="./img/instagram8.jpg"
              alt="Instagram 4"
              className="w-full  object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
