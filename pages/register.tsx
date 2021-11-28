/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import LayoutLogin from "../src/component/template/Layout";

const register = () => {
  const [register, setRegister] = useState<any>({
    fullName: "",
    birthday: "",
    phone: "",
    email: "",
    address: "",
  });

  const { fullName, birthday, phone, email, address } = register;

  const onchangeRegister = (e: any) => {
    const { name, value, type, huyi } = e.target;

    console.log("type :>> ", type);
    console.log("huyi :>> ", huyi);

    setRegister((v: any) => ({
      ...v,
      [name]: value,
    }));
  };

  const onSubmitRegister = (e: any) => {
    console.log("e :>> ", e);
    e.preventDefault();
    console.log("register :>> ", register);
  };

  return (
    <LayoutLogin>
      <form onSubmit={onSubmitRegister}>
        <ul>
          <li>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={onchangeRegister}
              placeholder="fullName"
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="birthday"
              name="birthday"
              value={birthday}
              onChange={onchangeRegister}
            />
          </li>
          <li>
            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={phone}
              onChange={onchangeRegister}
            />
          </li>
          <li>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={onchangeRegister}
            />
          </li>
          <li>
            <input
              type="text"
              name="address"
              placeholder="address"
              value={address}
              onChange={onchangeRegister}
            />
          </li>
        </ul>
        <button type="submit"> register</button>
      </form>
    </LayoutLogin>
  );
};

export default register;
