import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "./Footer.scss";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  // Menu cho "Hỗ trợ khách hàng"
  const supportMenu = (
    <Menu className="dropdown-menu">
      <Menu.Item key="1">Hướng dẫn chọn cỡ giày</Menu.Item>
      <Menu.Item key="2">Chính sách đổi trả</Menu.Item>
      <Menu.Item key="3">Thanh toán, giao nhận</Menu.Item>
      <Menu.Item key="4">Chính sách bảo mật</Menu.Item>
      <Menu.Item key="5">Câu hỏi thường gặp</Menu.Item>
      <Menu.Item key="6">Chính sách khách hàng thân thiết</Menu.Item>
      <Menu.Item key="7">Hướng dẫn mua hàng Online</Menu.Item>
    </Menu>
  );

  // Menu cho "Về Juno"
  const aboutMenu = (
    <Menu className="dropdown-menu">
      <Menu.Item key="1">Giới thiệu</Menu.Item>
      <Menu.Item key="2">Liên hệ</Menu.Item>
      <Menu.Item key="3">Tin tức Juno</Menu.Item>
      <Menu.Item key="4">Thông tin thị trường</Menu.Item>
      <Menu.Item key="5">Cơ hội làm việc tại Juno</Menu.Item>
    </Menu>
  );

  // Hàm toggle dropdown
  const toggleDropdown = () => {
    setVisible(!visible);
  };

  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Hỗ trợ khách hàng */}
        <Dropdown
          overlay={supportMenu}
          trigger={["click"]}
          placement="bottomLeft"
          open={visible}
          onOpenChange={toggleDropdown}
          overlayStyle={{ position: "absolute", top: "auto", bottom: "auto" }}
        >
          <a
            className="text-black font-semibold flex items-center hover:text-gray-700"
            onClick={(e) => e.preventDefault()}
          >
            HỖ TRỢ KHÁCH HÀNG <DownOutlined className="ml-2" />
          </a>
        </Dropdown>

        {/* Về Juno */}
        <Dropdown
          overlay={aboutMenu}
          trigger={["click"]}
          placement="bottomRight"
          open={visible}
          onOpenChange={toggleDropdown}
          overlayStyle={{ position: "absolute", top: "auto", bottom: "auto" }}
        >
          <a
            className="text-black font-semibold flex items-center hover:text-gray-700"
            onClick={(e) => e.preventDefault()}
          >
            VỀ JUNO <DownOutlined className="ml-2" />
          </a>
        </Dropdown>
      </div>
      {/* Author  */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2 text-xs sm:text-sm">
        <div className="flex space-x-4">
          <p>Đặng Gia Bảo- DH52108711</p>
          <p>Hà Trần Hoàng Anh- DH52108862</p>
        </div>
        <div className="flex items-center space-x-2">
          <img
            alt="Blue checkmark icon"
            className="w-5 h-5"
            height={20}
            src="https://storage.googleapis.com/a1aa/image/4fdd265a-f56b-480c-9289-7add1accab53.jpg"
            width={20}
          />
          <span>Powered by Haravan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
