import Image from "next/image";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border lg:w-1/3 lg:h-1/2 rounded shadow-lg">
        <Image
          src="/satkomindo1.png"
          width={200}
          height={20}
          className="mx-auto mt-10"
        />
        <h1 className="font-bold text-center mt-5 text-2xl">Absensi Online</h1>
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className=""
          >
            <div className="lg:ml-28 lg:pl-10 mx-5 mt-6">
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="password" />
              </Form.Item>
            </div>
            <Form.Item
              wrapperCol={{
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit" className="bg-blue-500 lg:mx-2  lg:w-1/2">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
