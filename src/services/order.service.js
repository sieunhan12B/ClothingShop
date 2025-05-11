import { http } from "./config";

export const donHangService = {
  getProductsByCart: (id_user, token) => {
    return http.get(`/QuanLyOrders/LayDanhSachSanPhamTrongGioHang/${id_user}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  editUser: (data, token) => {
    return http.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
