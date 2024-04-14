import Logo from '@/assets/img/logo.png'
import ForgetIcon from '@/assets/svg/forgot.svg'
import { LeftOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { motion } from 'framer-motion'
const Forget = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }
  return (
    <div className="Forget h-screen grid grid-cols-2  items-center">
      <div className="left flex bg-[#CDE1FD] h-full justify-center items-center">
        <div className="logo absolute left-4 top-6">
          <img src={Logo} alt="logo" />
        </div>
        <img src={ForgetIcon} alt="svg" className="size-96" />
      </div>
      <div className="right basis-1/2">
        <div className="flex justify-center content-center">
          <motion.div
            animate={{
              y: 0,
              opacity: 1,
            }}
            style={{
              y: 100, // 向下移动200px
              opacity: 0, // 透明度为0
            }}
          >
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
                  <a href="/login">返回</a>
                </p>
                <p className="text-3xl mb-1">忘记密码</p>
                <p className="text-xl text-s-blue">
                  输入您的注册电子邮件地址。我们将向您发送重置密码的代码。
                </p>
              </div>
              <Form.Item
                name="username"
                className="text-p-blue"
                rules={[
                  { required: true, message: 'Please input your Email!' },
                ]}
              >
                <div>
                  <div className="mb-2">邮箱</div>
                  <Input className="border-p-blue" placeholder="Email" />
                </div>
              </Form.Item>
              <Form.Item
                name="password"
                className="text-p-blue"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <div>
                  <div className="mb-2">新密码</div>
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
                  发送
                </Button>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Forget
