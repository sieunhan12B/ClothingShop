import React, { useContext, useEffect, useState } from "react";
import { sanPhamService } from "../../services/product.service";
import { NotificationContext } from "../../App";

const OderPage = () => {
  const { showNotification } = useContext(NotificationContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    sanPhamService
      .getListProduct()
      .then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data);
        showNotification("Lấy danh sách sản phẩm thành công", "success", 2000);
      })
      .catch((err) => {
        console.log(err);
        showNotification(err.response.data.message, "error", 2000);
      })
      .finally(() => {
        console.log("Fetch products completed");
      });
  }, []);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Quần Tây Nam",
      color: "Trắng",
      price: 499000,
      quantity: 1,
      image: "./img/quantay.jpg",
    },
    {
      id: 2,
      name: "Sơ mi Form Slim-Fit Tay Dài JNA070",
      color: "Đen",
      size: "S",
      price: 249000,
      quantity: 1,
      image: "./img/somi.jpeg",
    },
  ]);

  const [note, setNote] = useState("");
  const [voucher, setVoucher] = useState("");
  const [shippingOption, setShippingOption] = useState("free");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = shippingOption === "free" ? 0 : 20000;
  const discount = 20000;
  const total = subtotal + shippingFee - discount;

  const suggestedProducts = [
    {
      id: 1,
      name: "Giày Cao Gót Bit M...",
      price: 499000,
      image: "https://via.placeholder.com/150x150",
    },
    {
      id: 2,
      name: "Giày Sandal Đế Th...",
      price: 599000,
      image: "https://via.placeholder.com/150x150",
    },
    {
      id: 3,
      name: "Giày Sandal Đế Dù...",
      price: 549000,
      image: "https://via.placeholder.com/150x150",
    },
    {
      id: 4,
      name: "Giày Sandal Đế Dù...",
      price: 499000,
      image: "https://via.placeholder.com/150x150",
    },
  ];

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };
  return (
    <main className="max-w-6xl mx-auto py-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">
        ĐƠN HÀNG CỦA BẠN (Có 2 sản phẩm trong giỏ hàng)
      </h1>

      {/* Main Content */}
      <div className="flex space-x-8">
        {/* Cart Items */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-4">
            Đăng nhập để tích điểm và ưu đãi thành viên tại JUNO
          </p>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">
                  Màu: {item.color} {item.size && `/ Kích thước: ${item.size}`}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="font-bold">
                {(item.price * item.quantity).toLocaleString()}đ
              </p>
            </div>
          ))}

          {/* Order Note */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Ghi chú đơn hàng</h3>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Nhập bất kỳ yêu cầu nào của khách khi nhận hàng, gửi yêu cầu nhập để..."
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>

          {/* Suggested Products */}
          <div className="mt-8">
            <h3 className="font-semibold mb-4">Sản phẩm hay được mua cùng</h3>
            <div className="grid grid-cols-4 gap-4">
              {products.map((product) => (
                <div key={product.id} className="text-center">
                  <img
                    src={product.gallery.thumbnail[0]}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded"
                  />
                  <p className="mt-2">{product.name}</p>
                  <p className="font-bold">{product.price.toLocaleString()}đ</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-80">
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-4">TÓM TẮT ĐƠN HÀNG</h3>
            <div className="flex justify-between mb-2">
              <span>Tổng tiền hàng:</span>
              <span>{subtotal.toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tổng tính:</span>
              <span>{subtotal.toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Phí vận chuyển:</span>
              <span>{shippingFee.toLocaleString()}đ</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Tổng tiền:</span>
              <span>{total.toLocaleString()}đ</span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-black text-white py-3 rounded mt-4 hover:bg-gray-800">
              MUA THÊM SẢN PHẨM
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OderPage;
