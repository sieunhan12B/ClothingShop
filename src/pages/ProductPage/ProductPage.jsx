import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const flashSaleItems = [
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Túi Xách Hobo...",
      price: "549.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Sandal Gót Vuông...",
      price: "219.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Kính Mát...",
      price: "349.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Túi Xách Tote...",
      price: "279.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Sandal Gót...",
      price: "219.000đ",
    },
  ];

  const productItems = [
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Túi Xách Hobo...",
      price: "549.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Túi Xách Mini...",
      price: "649.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Cao Gót...",
      price: "499.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Sandal Gót Vuông...",
      price: "219.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Cao Gót...",
      price: "549.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Túi Xách Mini...",
      price: "649.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Sandal Gót Vuông...",
      price: "219.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Cao Gót...",
      price: "499.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Túi Xách Hobo...",
      price: "549.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Sandal Gót Vuông...",
      price: "219.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Cao Gót...",
      price: "499.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Túi Xách Mini...",
      price: "649.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Sandal Gót Vuông...",
      price: "219.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Cao Gót...",
      price: "499.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Túi Xách Hobo...",
      price: "549.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Sandal Gót Vuông...",
      price: "219.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Cao Gót...",
      price: "499.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Túi Xách Mini...",
      price: "649.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Sandal Gót Vuông...",
      price: "219.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Cao Gót...",
      price: "499.000đ",
    },
  ];

  return (
    <main className="flex-1">
      {/* Flash Sale Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            Flash Sale <span className="text-red-500">Mỗi Ngày</span>
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {flashSaleItems.map((item, index) => (
              <Link to={`/product/detail`} key={index}>
                <div key={index} className="text-center">
                  <img
                    src={item.img}
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

      {/* Top Sale Phái Mạnh Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-4">
            Top Sale Phái Mạnh
          </h2>
          <div className="grid grid-cols-5 gap-4 mb-8">
            {productItems.slice(0, 5).map((item, index) => (
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

          {/* Banner Image */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src="./img/cardproduct.jpeg"
                alt="Banner 1"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {productItems.slice(5, 7).map((item, index) => (
                <div key={index} className="text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-32 object-cover"
                  />
                  <p className="mt-2">{item.title}</p>
                  <p className="text-red-500 font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid with Alternating Banners */}
      {Array.from({ length: Math.ceil(productItems.length / 10) }).map(
        (_, sectionIndex) => (
          <section
            key={sectionIndex}
            className={`py-8 ${sectionIndex % 2 === 0 ? "" : "bg-gray-50"}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-5 gap-4">
                {productItems
                  .slice(sectionIndex * 10, (sectionIndex + 1) * 10)
                  .map((item, index) => (
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
              {(sectionIndex + 1) * 10 < productItems.length && (
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div
                    className={sectionIndex % 2 === 0 ? "order-1" : "order-2"}
                  >
                    <img
                      src="./img/cardproduct.jpeg"
                      alt={`Banner ${sectionIndex + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div
                    className={sectionIndex % 2 === 0 ? "order-2" : "order-1"}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {productItems
                        .slice(
                          (sectionIndex + 1) * 10,
                          (sectionIndex + 1) * 10 + 2
                        )
                        .map((item, index) => (
                          <div key={index} className="text-center">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-32 object-cover"
                            />
                            <p className="mt-2">{item.title}</p>
                            <p className="text-red-500 font-bold">
                              {item.price}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )
      )}
    </main>
  );
};

export default ProductPage;
