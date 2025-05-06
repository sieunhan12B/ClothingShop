import { http } from "./config";

export const sanPhamService = {
  getListProduct: () => {
    return http.get("/QuanLySanPham/LayDanhSachSanPham");
  },
  getProductById: (id) => {
    return http.get(`/QuanLySanPham/LayThongTinSanPhamTheoId/${id}`);
  },
  addProduct: (data) => {
    return http.post("/QuanLySanPham/ThemSanPham", data);
  },
  //   getListUser: () => {
  //     return http.get("/QuanLyNguoiDung/LayDanhSachNguoiDung");
  //   },
  //   addUser: (data) => {
  //     return http.post("/QuanLyNguoiDung/ThemNguoiDung", data);
  //   },
  //   deleteUser: (account) => {
  //     return http.delete(`/QuanLyNguoiDung/XoaNguoiDung/${account}`);
  //   },
  //   updateUser: (data) => {
  //     return http.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  //   },
};
