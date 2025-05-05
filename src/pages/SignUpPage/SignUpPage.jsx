import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputCustom from "../../components/Input/InputCustom";
import { Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { showNotification } = useContext(NotificationContext) || {};

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        fullname: "",
        email: "",
        phone_number: "",
        password: "",
        xacNhanpassword: "",
      },
      validationSchema: Yup.object({
        fullname: Yup.string().required("Họ tên không được để trống"),
        email: Yup.string()
          .email("Email không đúng định dạng")
          .required("Email không được để trống"),
        phone_number: Yup.string()
          .matches(/^\d{10,15}$/, "Số điện thoại phải có 10-15 chữ số")
          .required("Số điện thoại không được để trống"),
        password: Yup.string()
          .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
          .required("Mật khẩu không được để trống"),
        xacNhanpassword: Yup.string()
          .required("Vui lòng nhập lại mật khẩu")
          .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
      }),
      onSubmit: (values) => {
        const { fullname, email, phone_number, password } = values;
        authService
          .signUp({ fullname, email, phone_number, password })
          .then((res) => {
            if (showNotification) {
              showNotification("Đăng ký thành công", "success");
            } else {
              console.log("Đăng ký thành công");
            }
            setTimeout(() => {
              navigate(path.logIn);
            }, 2000);
          })
          .catch((err) => {
            if (showNotification) {
              showNotification(
                err.response?.data?.message || "Lỗi đăng ký",
                "error"
              );
            } else {
              console.error("Lỗi đăng ký:", err.response?.data?.message);
            }
          });
      },
    });

  return (
    <div className="form-signup flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-[500px] p-4 md:p-8 bg-white/90 border border-gray-300 rounded-lg shadow-md backdrop-blur-sm">
        

        <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputCustom
            labelContent="Họ tên"
            placeholder="Nhập họ tên của bạn"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.fullname}
            touched={touched.fullname}
          />
          <InputCustom
            labelContent="Email"
            placeholder="Nhập email của bạn"
            typeInput="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
          <InputCustom
            labelContent="Số điện thoại"
            placeholder="Nhập số điện thoại của bạn"
            typeInput="tel"
            name="phone_number"
            value={values.phone_number}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone_number}
            touched={touched.phone_number}
          />
          <InputCustom
            labelContent="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            typeInput="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
          />
          <InputCustom
            labelContent="Nhập lại mật khẩu"
            placeholder="Nhập lại mật khẩu của bạn"
            typeInput="password"
            name="xacNhanpassword"
            value={values.xacNhanpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.xacNhanpassword}
            touched={touched.xacNhanpassword}
          />

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-200 hover:text-black transition-colors"
          >
            Đăng ký
          </button>
          <div className="text-center space-x-2 mt-2">
            <span>Bạn đã có tài khoản?</span>
            <Link to={path.logIn} className="font-bold text-blue-500 hover:underline">
              Đăng nhập
            </Link>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default SignUpPage;