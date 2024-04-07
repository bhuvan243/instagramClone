import { Button, Form, Input } from "antd";
import "../../generalStyles/login.scss";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../auth";
import { useContext, useState } from "react";
import { LoginContext } from "../../App";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsUserLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const onFinishForm = async (loginFormData) => {
    setIsLoading(true);
    const { success } = await login(loginFormData);
    if (success) {
      setIsUserLoggedIn(true);
      navigate("/home");
    } else setIsLoading(false);
  };

  return (
    <div className="form-container">
      <Form className="form" layout="vertical" onFinish={onFinishForm}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "Please enter a valid email" },
            { required: true, message: "Email is required" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password />
        </Form.Item>
        <Button block htmlType="submit" loading={isLoading} className="btn">
          Login
        </Button>
        <div className="message">
          Don't have an account <Link to="/signup">Signup</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
