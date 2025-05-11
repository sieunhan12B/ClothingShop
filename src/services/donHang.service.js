import { http } from "./config";

export const donHangService = {
  getPaginatedData: (params) => {
    return http.get("/QuanLyOrders/LayDanhSachTatCaDonHang", { params });
  },
  deleteOrder: (id_order) => {
    return http.delete(`/QuanLyOrders/XoaDonHang/${id_order}`);
  },
  confirmOrder: (id_order, payload = {}) => {
    return http.put(`/QuanLyOrders/XacNhanDonHang/${id_order}`, payload);
  },
  getOrderByStatus: (status, params) => {
    return http.get(`/QuanLyOrders/LayDanhSachDonHangTheoTrangThai/${status}`, { params });
  },
  getOrderByKeyword: (keyword, params) => {
    return http.get(`/QuanLyOrders/LayDanhSachDonHangCuaNguoiDung/${encodeURIComponent(keyword)}`, { params });
  },
  getOrderById: (id_order) => {
    return http.get(`/QuanLyOrders/LayDonHangTheoMaDonHang/${id_order}`);
  },
};