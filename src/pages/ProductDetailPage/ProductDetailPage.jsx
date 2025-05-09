import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sanPhamService } from "../../services/product.service";
import { Image } from "antd";

const ProductDetailPage = () => {
  const { id_product } = useParams();
  const [product, setProduct] = useState(null);
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(""); // State for the main image

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productRes, listProductRes] = await Promise.all([
          sanPhamService.getProductById(id_product),
          sanPhamService.getListProduct(),
        ]);

        setProduct(productRes.data.data);
        setListProduct(listProductRes.data.data);
        // Set initial main image
        setMainImage(productRes.data.data.gallery?.thumbnail[0] || "");
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id_product]);

  // Handle thumbnail click to update main image
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Không tìm thấy sản phẩm!</p>
      </div>
    );
  }

  return (
    <main className="flex-1 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Product Gallery and Details */}
        <div className="grid grid-cols-2 gap-8">
          {/* Product Gallery */}
          <div>
            <Image
              src={mainImage}
              alt={product.title}
              className="w-full h-96 object-cover mb-4"
            />
            {/* Thumbnail Gallery */}
            <div className="flex space-x-2 overflow-y-hidden overflow-x-auto">
              {product.gallery?.thumbnail?.map((image, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 flex-shrink-0 cursor-pointer border-2 ${
                    mainImage === image ? "border-blue-500" : "border-gray-200"
                  }`}
                  onClick={() => handleThumbnailClick(image)}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    preview={false} // Disable preview for thumbnails
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              <span className="text-red-500 font-bold text-xl mr-2">
                {(product.price * (1 - product.discount / 100)).toLocaleString(
                  "vi-VN"
                )}
                đ
              </span>
              <span className="text-gray-500 line-through">
                {product.price}đ
              </span>
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Sale {product.discount}%
              </span>
            </div>
            <div className="text-xl my-2">{product.description}</div>

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
                Miễn phí đổi hàng tại hệ thống showroom BAOANH
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
              <p className="text-sm mb-2">Mã sản phẩm: {product.id_product}</p>
              <p className="text-sm mb-2">Thương hiệu: BAOANH</p>
              <p className="text-sm mb-2">Loại: {product.category?.name}</p>
              <p className="text-sm mb-2">Size: {product.size}</p>
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
            đến showroom BAOANH gần nhất để được hỗ trợ. Xem chi tiết chính sách
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
              {listProduct?.map((item, index) => (
                <div key={index} className="text-center min-w-[200px]">
                  <Image
                    src={item.gallery?.thumbnail?.[0]}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <Link
                    to={`/product-detail/${item.id_product}`}
                    className="mt-2"
                  >
                    {item.title}
                  </Link>
                  <p className="text-red-500 font-bold">
                    {(item.price * (1 - item.discount / 100)).toLocaleString(
                      "vi-VN"
                    )}
                    đ
                  </p>
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
