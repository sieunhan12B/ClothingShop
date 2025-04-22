import React from "react";
import { Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Họ và Tên",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tuổi",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Địa Chỉ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Số Điện Thoại",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Vai Trò",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Trạng Thái",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Hoạt động" ? "green" : "red"}>{status}</Tag>
    ),
  },
  {
    title: "Nhãn",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "khó tính") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Hành Động",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Mời {record.name}</a>
        <a>Xóa</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "Nguyễn Văn An",
    age: 28,
    address: "123 Đường Láng, Đống Đa, Hà Nội",
    email: "nguyenvanan@gmail.com",
    phone: "0912345678",
    role: "Quản trị viên",
    status: "Hoạt động",
    tags: ["thân thiện", "chăm chỉ"],
  },
  {
    key: "2",
    name: "Trần Thị Bình",
    age: 35,
    address: "45 Nguyễn Huệ, TP Huế",
    email: "tranbinh@gmail.com",
    phone: "0987654321",
    role: "Người dùng",
    status: "Khóa",
    tags: ["khó tính"],
  },
  {
    key: "3",
    name: "Lê Minh Châu",
    age: 30,
    address: "78 Lê Lợi, Quận 1, TP.HCM",
    email: "leminhchau@gmail.com",
    phone: "0932145678",
    role: "Biên tập viên",
    status: "Hoạt động",
    tags: ["sáng tạo", "năng động"],
  },
  {
    key: "4",
    name: "Phạm Quốc Đạt",
    age: 40,
    address: "12 Trần Phú, Nha Trang, Khánh Hòa",
    email: "phamquocdat@gmail.com",
    phone: "0908765432",
    role: "Người dùng",
    status: "Hoạt động",
    tags: ["trung thành", "thân thiện"],
  },
  {
    key: "5",
    name: "Hoàng Thị E",
    age: 25,
    address: "56 Nguyễn Trãi, Thanh Hóa",
    email: "hoangthie@gmail.com",
    phone: "0971234567",
    role: "Người dùng",
    status: "Khóa",
    tags: ["mới", "khó tính"],
  },
];

const ManagerUserPage = () => (
  <Table pagination={{ pageSize: 3 }} columns={columns} dataSource={data} />
);

export default ManagerUserPage;
