import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <div className="text-3xl font-bold text-red-500">JUNO</div>
        <nav className="space-x-4">
          <a href="#" className="text-sm uppercase hover:underline">
            Hàng Mới
          </a>
          <a href="#" className="text-sm uppercase hover:underline">
            Sản Phẩm
          </a>
          <a href="#" className="text-sm uppercase hover:underline">
            Showroom
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-10">
        <h1 className="text-2xl font-bold mb-4">Đăng Nhập</h1>
        <p className="text-center text-sm mb-6 max-w-md">
          Đăng nhập để tích điểm và nhận ưu đãi thành viên khi mua hàng. Nhập số
          điện thoại để tiếp tục hoặc đăng nhập bằng tài khoản Juno.
        </p>

        {/* Form */}
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Số điện thoại của bạn <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Vui lòng nhập số điện thoại của bạn để đăng ký thành viên"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
            Tiếp Tục
          </button>
        </div>

        {/* Social Login */}
        <div className="flex items-center my-6 w-full max-w-sm">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">hoặc đăng nhập với</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center justify-center w-12 h-12 border rounded-full hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </button>
          <button className="flex items-center justify-center w-12 h-12 border rounded-full hover:bg-gray-100">
            <img
              src="https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?rs=1&pid=ImgDetMain"
              alt="Google"
              className="w-6 h-6"
            />
          </button>
        </div>

        <p className="text-center text-sm mt-6">
          Bằng việc đăng nhập, bạn đã đồng ý với{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Điều Khoản Dịch Vụ
          </a>{" "}
          &{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Chính Sách Bảo Mật
          </a>{" "}
          của Juno
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4 text-sm">
          {/* Online Shopping */}
          <div>
            <h3 className="font-bold mb-2">
              Gọi Mua Hàng Online (08:00 - 21:00 mỗi ngày)
            </h3>
            <p className="text-xl font-bold text-blue-500">1800 1162</p>
            <p>Tất cả các ngày trong tuần (Trừ Tết Âm Lịch)</p>
            <h3 className="font-bold mt-4">
              Góp Ý & Khiếu Nại (08:30 - 20:30)
            </h3>
            <p className="text-xl font-bold text-blue-500">1800 1160</p>
            <p>Tất cả các ngày trong tuần (Trừ Tết Âm Lịch)</p>
          </div>

          {/* Showroom */}
          <div>
            <h3 className="font-bold mb-2">Hệ Thống Showroom</h3>
            <img
              src="https://via.placeholder.com/200x150"
              alt="Showroom"
              className="w-full h-32 object-cover"
            />
            <a href="#" className="text-blue-500 hover:underline">
              Xem địa chỉ hệ thống showroom →
            </a>
          </div>

          {/* Fanpage */}
          <div>
            <h3 className="font-bold mb-2">Fanpage Của Chúng Tôi</h3>
            <img
              src="https://via.placeholder.com/200x100"
              alt="Fanpage"
              className="w-full h-20 object-cover"
            />
            <div className="flex space-x-2 mt-2">
              <a href="#" className="text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-red-500">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-black">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Placeholder */}
          <div></div>
        </div>

        {/* Footer Links */}
        <div className="max-w-6xl mx-auto mt-4 flex justify-between text-sm">
          <div>
            <a href="#" className="text-gray-600 hover:underline">
              Hỗ Trợ Khách Hàng →
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-600 hover:underline">
              Về Juno →
            </a>
          </div>
          <p className="text-gray-600">
            © 2019 Juno. Công ty Cổ Phần - SX - TM - DV Juno
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
