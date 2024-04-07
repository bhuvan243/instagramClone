import { Button, Form, Input, Radio } from "antd";
import "../../generalStyles/login.scss";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../auth";
import { useState } from "react";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onFinishForm = async (data) => {
    setIsLoading(true);
    const { success } = await signup(data);
    if (success) {
      navigate("/login");
    } else setIsLoading(false);
  };

  return (
    <div className="form-container">
      <Form onFinish={onFinishForm} layout="vertical" className="form">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input />
        </Form.Item>
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
        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: "City is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Select a gender" }]}
        >
          <Radio.Group>
            <Radio value="MALE">Male</Radio>
            <Radio value="FEMALE">Female</Radio>
            <Radio value="OTHERS">Others</Radio>
          </Radio.Group>
        </Form.Item>
        <Button className="btn" loading={isLoading} htmlType="submit" block>
          Submit
        </Button>
        <div className="message">
          Already have an account ? <Link to="/login">Login</Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
