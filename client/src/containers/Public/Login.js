import React, { useEffect, useState } from "react";
import { InputForm, Button } from "../../components";
import { useLocation } from "react-router-dom";
import { apiRegister } from "../../services/auth";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";
const Login = () => {
  const location = useLocation();
  const dispath = useDispatch();
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [payload, setPayload] = useState({ phone: "", password: "", name: "" });

  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  const handleSubmit = async () => {
    console.log(payload);
    dispath(actions.register(payload));
    // console.log(response);
  };
  return (
    <div className="bg-white  w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm ">
      <h3 className="font-semibold text-2xl mb-5">
        {isRegister ? "Tạo tài khoản mới" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-7">
        {isRegister && (
          <InputForm
            label={"HỌ TÊN"}
            value={payload.name}
            setValue={setPayload}
            type="name"
          />
        )}
        <InputForm
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          type="phone"
        />
        <InputForm
          label={"MẬT KHẨU"}
          value={payload.password}
          setValue={setPayload}
          type="password"
        />
        <Button
          text={isRegister ? "Đăng Ký" : "Đăng nhập"}
          bgColor={"bg-secondary1"}
          textColor={"text-white"}
          fullwidth
          onClick={handleSubmit}
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản{" "}
            <span
              onClick={() => {
                setIsRegister(false);
              }}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu{" "}
            </small>
            <small
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => {
                setIsRegister(true);
              }}
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
