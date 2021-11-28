import React from "react";
import Layout from "../component/template/Layout";

const register = () => {

  const [register, setRegister] = useState({
    fullName: "abc",
    birthday: 
      phone:
      email:
      address:
  })

  return (
    <Layout>
      <form action="">
        <ul>
          <li><input type="text" name="fullName"/></li>
          <li><input type="date" name="birthday" /></li>
          <li><input type="text" name="phone"/></li>
          <li><input type="email" name="email"/></li>
          <li><input type="text" placeholder="address" name="address" /></li>
        </ul>
        <button>register</button>
      </form>
    </Layout>
  );
};

export default register;
