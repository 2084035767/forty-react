import Logo from '@/assets/img/logo.png'
import Flogin from '@/assets/svg/f_login.svg'
import { LeftOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'

const Reset = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }
  return (
    <div className="Reset h-screen grid grid-cols-2  items-center">
      <div className="left flex bg-[#CDE1FD] h-full justify-center items-center">
        <div className="logo absolute left-4 top-6">
          <img src={Logo} alt="logo" />
        </div>
        <img src={Flogin} alt="svg" className="size-96" />
      </div>
      <div className="right basis-1/2">
        <div className="flex justify-center content-center">
          <Form
            name="normal_login"
            className="text-p-blue"
            style={{ width: 350 }}
            size="large"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="mb-10">
              <p className="text-xl mb-3">
                <LeftOutlined />
                返回
              </p>
              <p className="text-3xl mb-1">忘记密码</p>
              <p className="text-xl text-s-blue">
                输入您的注册电子邮件地址。我们将向您发送重置密码的代码。
              </p>
            </div>
            <Form.Item
              name="password"
              className="text-p-blue"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <div>
                <div className="mb-2">密码</div>
                <Input
                  type="password"
                  className="border-p-blue"
                  placeholder="Password"
                />
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(54, 98, 236, 0.8)',
                }}
              >
                重置
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default Reset
