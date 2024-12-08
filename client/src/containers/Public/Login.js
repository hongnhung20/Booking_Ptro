import React from "react";
import { InputForm, Button } from "../../components";

const Login = () => {
  const make = "Ford";
  const model = "Mustang";
  const car = { make, model };
  console.log(car);
  return (
    <div className="bg-white  w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm ">
      <h3 className="font-semibold text-2xl mb-5">Đăng nhập</h3>
      <div className="w-full flex flex-col gap-7">
        <InputForm label={"SỐ ĐIỆN THOẠI"} />
        <InputForm label={"MẬT KHẨU"} />
        <Button
          text={"Đăng nhập"}
          bgColor={"bg-secondary1"}
          textColor={"text-white"}
          fullwidth
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Bạn quên mật khẩu{" "}
        </small>
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Tạo tài khoản mới
        </small>
      </div>
    </div>
  );
};

export default Login;
