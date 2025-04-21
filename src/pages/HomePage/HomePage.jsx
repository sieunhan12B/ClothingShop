import React from "react";

const HomePage = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to ShopQuanAo</h1>
      <p className="text-lg">
        Discover the latest fashion trends and quality clothing at ShopQuanAo.
      </p>
      {/* Add featured products or other content here */}
      {/* Instagram Section  */}
      <section className="max-w-[1200px] mx-auto mt-12 px-4 text-center">
        <h4 className="font-bold text-xs mb-2">INSTAGRAM</h4>
        <p className="text-xs text-gray-600 mb-4">@juno.vn</p>
        <div className="grid grid-cols-4 gap-4 max-w-[900px] mx-auto">
          <img
            alt="Woman holding white handbag with yellow background"
            className="w-full h-48 object-cover rounded-md"
            height={200}
            src="https://storage.googleapis.com/a1aa/image/6f74cdee-69da-44de-ce28-789c62ad74a6.jpg"
            width={200}
          />
          <img
            alt="Close up of brown handbag"
            className="w-full h-48 object-cover rounded-md"
            height={200}
            src="https://storage.googleapis.com/a1aa/image/98a29909-b596-4740-e0a5-6a6d3a31f4a0.jpg"
            width={200}
          />
          <img
            alt="Woman holding black handbag on orange background"
            className="w-full h-48 object-cover rounded-md"
            height={200}
            src="https://storage.googleapis.com/a1aa/image/f725dc97-ec26-4c05-d934-1cc5bdb4d711.jpg"
            width={200}
          />
          <img
            alt="Woman holding black handbag on white background"
            className="w-full h-48 object-cover rounded-md"
            height={200}
            src="https://storage.googleapis.com/a1aa/image/9aa1fa30-5266-43b8-c1cf-48623ee7b931.jpg"
            width={200}
          />
        </div>
      </section>

      {/* Liên hệ  */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
        <div>
          <p className="font-semibold mb-1">
            GỌI MUA HÀNG ONLINE (08:00 - 21:00 mỗi ngày)
          </p>
          <p>1800 1162</p>
          <p className="text-[9px] mt-1">
            Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
          </p>
          <p className="font-semibold mt-4 mb-1">
            GÓP Ý &amp; KHIẾU NẠI (08:30 - 20:30)
          </p>
          <p>1800 1160</p>
          <p className="text-[9px] mt-1">
            Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
          </p>
        </div>
        <div>
          <p className="font-semibold mb-1">HỆ THỐNG SHOWROOM</p>
          <img
            alt="Interior image of showroom with shelves and products"
            className="w-full rounded-md mb-1"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/29e33d3f-aae0-48ee-26ed-91794ca4b215.jpg"
            width={300}
          />
          <a className="text-red-600 text-xs hover:underline" href="#">
            Xem địa chỉ hệ thống 42 showroom
          </a>
        </div>
        <div>
          <p className="font-semibold mb-1">FANPAGE CỦA CHÚNG TÔI</p>
          <img
            alt="Fanpage banner image with woman holding pink handbag and drink"
            className="w-full rounded-md mb-1"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/c2067781-05e7-460f-b09f-21be8052628a.jpg"
            width={300}
          />
          <div className="flex space-x-4 text-gray-600 text-lg justify-center">
            <a aria-label="Facebook" className="hover:text-red-600" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a aria-label="Instagram" className="hover:text-red-600" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a aria-label="YouTube" className="hover:text-red-600" href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a aria-label="TikTok" className="hover:text-red-600" href="#">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
