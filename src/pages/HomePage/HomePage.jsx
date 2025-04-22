import React from "react";

const HomePage = () => {
  return (
    <main className="flex-1">
      {/* Banner */}
      <section className="relative">
        <img
          src="./img/banner1.jpg"
          alt="Banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">He NONSTOP</h1>
        </div>
      </section>

      {/* Flash Sale Section */}
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
      </section>

      {/* New Arrivals Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Hàng Mới Về</h2>
          <p className="text-center text-sm mb-6">
            Cốc sản phẩm bình nước, nước uống khiến bạn mê mẩn
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Giày Cao Gót Pump...",
                price: "549.000đ",
              },
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Túi Xách Tote Cán...",
                price: "849.000đ",
              },
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Túi Xách Mini Hộp...",
                price: "989.000đ",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <p className="mt-2">{item.title}</p>
                <p className="text-red-500 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Xem Tất Cả →
            </a>
          </p>
        </div>
      </section>

      {/* Pre-Summer Collection Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            Pre-Summer Collection - Chó bợ rực rỡ, tự xinh cool
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain"
              alt="Pre-Summer 1"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain"
              alt="Pre-Summer 2"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Bộ Sưu Tập</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src="https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain"
                alt="Collection 1"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg">He NONSTOP - Khiêm Ngại</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain"
                alt="Collection 2"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg">He NONSTOP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            Gợi Ý Dành Riêng Cho Bạn
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Giày Cao Gót Pump...",
                price: "499.000đ",
              },
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Giày Sneakers...",
                price: "749.000đ",
              },
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Giày Cao Gót Pump...",
                price: "549.000đ",
              },
              {
                img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
                title: "Giày Cao Gót Sục...",
                price: "499.000đ",
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
      </section>

      {/* Instagram Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Instagram</h2>
          <p className="text-center text-sm mb-6">@juno.vn</p>
          <div className="grid grid-cols-3 gap-4">
            <img
              src="https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain"
              alt="Instagram 1"
              className="w-full h-48 object-cover"
            />
            <img
              src="https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain"
              alt="Instagram 2"
              className="w-full h-48 object-cover"
            />
            <img
              src="https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain"
              alt="Instagram 3"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
