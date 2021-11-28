import React, { useState } from "react";
import { RegisterForm } from "../src/component/organisms/Register";
import LayoutLogin from "../src/component/template/Layout";

const register = () => {
  return (
    <LayoutLogin>
      <RegisterForm />
    </LayoutLogin>
  );
};

export default register;
