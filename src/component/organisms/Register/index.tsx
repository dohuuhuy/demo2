/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

import styles from "./styles.module.css";

export const RegisterForm = () => {
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

    setRegister((v: any) => ({
      ...v,
      [name]: value,
    }));
  };

  const onSubmitRegister = (e: any) => {
    e.preventDefault();
    console.log("register :>> ", register);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitRegister} className={styles.formRegister}>
        <h2 className={styles.titleForm}>Thông tin cá nhân</h2>
        <ul className={styles.listInfo}>
          <li>
            <div className={styles.formInput}>
              <label>fullName: </label>
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={onchangeRegister}
                placeholder="Please input fullName ..."
              />
            </div>
          </li>
          <li>
            <div className={styles.formInput}>
              <label>birthday: </label>
              <input
                type="text"
                placeholder="Please input birthday ..."
                name="birthday"
                value={birthday}
                onChange={onchangeRegister}
              />
            </div>
          </li>
          <li>
            <div className={styles.formInput}>
              <label>phone: </label>
              <input
                type="text"
                name="phone"
                placeholder="Please input phone ..."
                value={phone}
                onChange={onchangeRegister}
              />
            </div>
          </li>
          <li>
            <div className={styles.formInput}>
              <label>email: </label>
              <input
                type="email"
                placeholder="Please input email ..."
                name="email"
                value={email}
                onChange={onchangeRegister}
              />
            </div>
          </li>
          <li>
            <div className={styles.formInput}>
              <label>address: </label>
              <input
                type="text"
                name="address"
                placeholder="Please input address ..."
                value={address}
                onChange={onchangeRegister}
              />
            </div>
          </li>
        </ul>
        <div className={styles.groupBtn}>
          <button type="submit" className={styles.btnRegisterForm}>
            {" "}
            register
          </button>
        </div>
      </form>
    </div>
  );
};
