import React, { useContext, useEffect, useState } from "react";
import { sanPhamService } from "../../services/sanPham.service";
import { donHangService } from "../../services/donHang.service";
import { NotificationContext } from "../../App";
import { Link } from "react-router-dom";

const OrderPage = () => {
  const { showNotification } = useContext(NotificationContext);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [note, setNote] = useState("");
  const [shippingOption, setShippingOption] = useState("free");

  useEffect(() => {
    donHangService
      .getProductsByCart(19, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
      .then((res) => {
        setOrder(res.data.data?.products || []);
        showNotification("Lấy danh sách sản phẩm thành công", "success", 2000);
      })
      .catch((err) => {
        showNotification(
          err.response?.data?.message || "Lỗi không xác định",
          "error",
          2000
        );
      });
  }, []);

  useEffect(() => {
    sanPhamService
      .getAllProducts()
      .then((res) => {
        setProducts(res.data.data);
        showNotification("Lấy danh sách sản phẩm thành công", "success", 2000);
      })
      .catch((err) => {
        showNotification(
          err.response?.data?.message || "Lỗi không xác định",
          "error",
          2000
        );
      });
  }, []);

  const handleQuantityChange = (id, delta) => {
    setOrder((prevOrder) =>
      prevOrder.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = order.reduce(
    (acc, item) =>
      acc +
      item.quantity *
        item.product_details?.price *
        (1 - item.product_details?.discount / 100),
    0
  );

  const shippingFee = shippingOption === "free" ? 0 : 20000;
  const discount = 20000;
  const total = subtotal + shippingFee - discount;

  return (
    <main className="max-w-6xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">
        ĐƠN HÀNG CỦA BẠN (Có {order.length} sản phẩm trong giỏ hàng)
      </h1>

      <div className="flex space-x-8">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-4">
            Đăng nhập để tích điểm và ưu đãi thành viên tại JUNO
          </p>

          {order.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img
                src={item.product_details?.thumbnail[0]}
                alt={item.product_details?.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-semibold">{item.product_details?.title}</h3>
                <p className="text-gray-500">
                  Size: {item.product_details?.size}
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
              <p className="font-bold text-right min-w-[120px]">
                {(
                  item.product_details?.price *
                  item.quantity *
                  (1 - item.product_details?.discount / 100)
                ).toLocaleString()}
                đ
              </p>
            </div>
          ))}

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Ghi chú đơn hàng</h3>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Nhập ghi chú cho đơn hàng..."
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>

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

        {/* Summary */}
        <div className="w-80">
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-4">TÓM TẮT ĐƠN HÀNG</h3>
            <div className="flex justify-between mb-2">
              <span>Tổng tiền hàng:</span>
              <span>{subtotal.toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Phí vận chuyển:</span>
              <span>{shippingFee.toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Giảm giá:</span>
              <span>{discount.toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Tổng tiền:</span>
              <span>{total.toLocaleString()}đ</span>
            </div>

            <Link to={"/"}>
              <button className="w-full bg-black text-white py-3 rounded mt-4 hover:bg-gray-800">
                THANH TOÁN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderPage;
