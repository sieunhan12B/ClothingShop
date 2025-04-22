import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import "antd/dist/reset.css";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4 text-sm">
        {/* Online Shopping */}
        <div>
          <h3 className="font-bold mb-2">
            Gọi Mua Hàng Online (08:00 - 21:00 mỗi ngày)
          </h3>
          <p className="text-xl font-bold text-blue-500">1800 1162</p>
          <p>Tất cả các ngày trong tuần (Trừ Tết Âm Lịch)</p>
          <h3 className="font-bold mt-4">Góp Ý & Khiếu Nại (08:30 - 20:30)</h3>
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
          © 2019 Công ty CP Sản Xuất Fashion Group
        </p>
      </div>
    </footer>
  );
};

export default Footer;
