import React from "react";

const ProductDetailPage = () => {
  const relatedProducts = [
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Túi Xách Vitamin Sea...",
      price: "549.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Sandal Đế Dùa...",
      price: "219.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Sandal Đế Dùa...",
      price: "219.000đ",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain",
      title: "Giày Sandal Đế Dùa...",
      price: "219.000đ",
    },
  ];

  return (
    <main className="flex-1 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Product Gallery and Details */}
        <div className="grid grid-cols-2 gap-8">
          {/* Product Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <img
                  key={index}
                  src="https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?rs=1&pid=ImgDetMain"
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              ))}
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold mb-2">Áo Thun Thời Trang</h1>
            <div className="flex items-center mb-4">
              <span className="text-red-500 font-bold text-xl mr-2">
                349.000đ
              </span>
              <span className="text-gray-500 line-through">499.000đ</span>
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Sale 30%
              </span>
            </div>

            {/* Color Options */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Màu sắc</p>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-gray-500 rounded-full border-2 border-gray-500"></button>
                <button className="w-8 h-8 bg-gray-800 rounded-full border-2 border-transparent"></button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 mb-4">
              Thêm vào giỏ hàng
            </button>

            {/* Delivery and Showroom Info */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-2">Giao hàng & Đổi trả</h3>
              <p className="text-sm mb-2">
                Đơn hàng từ 500.000đ trở lên sẽ được giao miễn phí toàn quốc.
              </p>
              <p className="text-sm mb-2">
                Miễn phí đổi hàng tại hệ thống showroom JUNO
              </p>
              <p className="text-sm mb-2">
                Chính sách đổi trả 30 ngày. Đổi trả miễn phí với lý do không vừa
                ý.
              </p>
              <p className="text-sm mb-2">Tổng đài hỗ trợ: 1800 1162</p>
              <p className="text-sm mb-2">
                Mở cửa: 8h - 22h tất cả các ngày trong tuần (nghỉ Tết Âm Lịch)
              </p>
              <p className="text-sm mb-2">Mở cửa showroom: 8h30 - 21h</p>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-bold mb-2">Thông tin bổ sung</h3>
              <p className="text-sm mb-2">Mã sản phẩm: MTK123</p>
              <p className="text-sm mb-2">Thương hiệu: JUNO</p>
              <p className="text-sm mb-2">Chất liệu: Nhựa cao cấp</p>
              <p className="text-sm mb-2">Loại kính: Kính thời trang</p>
              <p className="text-sm mb-2">
                Gợi ý bảo quản: Tránh tiếp xúc với nhiệt độ cao
              </p>
            </div>
          </div>
        </div>

        {/* Delivery and Return Policy */}
        <div className="mt-8 border-t pt-4">
          <h3 className="text-lg font-bold mb-2">Chính sách trả và đổi hàng</h3>
          <p className="text-sm">
            Đơn hàng của bạn sẽ được vận chuyển trong vòng 3-7 ngày làm việc,
            tùy thuộc vào khu vực. Hàng được giao miễn phí toàn quốc với đơn
            hàng từ 500.000đ. Chúng tôi hỗ trợ đổi trả miễn phí trong vòng 30
            ngày kể từ ngày mua hàng nếu sản phẩm chưa qua sử dụng và còn nguyên
            tem, nhãn mác. Quý khách vui lòng liên hệ tổng đài 1800 1162 hoặc
            đến showroom JUNO gần nhất để được hỗ trợ. Xem chi tiết chính sách
            trả và đổi hàng tại đây.
          </p>
        </div>

        {/* Related Products Section */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-center mb-4">
            Có thể bạn thích
          </h2>
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {relatedProducts.map((item, index) => (
                <div key={index} className="text-center min-w-[200px]">
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
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailPage;
