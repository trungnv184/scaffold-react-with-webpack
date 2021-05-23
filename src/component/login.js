import React from "react";
class Test {
  constructor() {
    this.a = 4;
  }
}
const Login = () => {
  const x = new Test();
  return <h1>Here is login page {x.a}</h1>;
};

export default Login;
