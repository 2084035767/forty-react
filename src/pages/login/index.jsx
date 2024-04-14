import Logo from '@/assets/img/logo.png'
import login from '@/assets/svg/login.svg'
import { Button, Checkbox, Form, Input } from 'antd'
import { motion } from 'framer-motion'
const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }
  return (
    <div className="Login h-screen grid grid-cols-2  items-center">
      <div className="left flex bg-[#CDE1FD] h-full justify-center items-center">
        <div className="logo absolute left-4 top-6">
          <img src={Logo} alt="logo" />
        </div>
        <img src={login} alt="svg" className="size-96" />
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
                <p className="text-3xl">欢迎👋</p>
                <p className="text-xl text-s-blue">请登录</p>
              </div>

              <Form.Item
                name="email"
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
                  <div className="mb-2">密码</div>
                  <Input
                    type="password"
                    className="border-p-blue"
                    placeholder="Password"
                  />
                </div>
              </Form.Item>

              <Form.Item>
                <div>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox className="text-p-blue">记住我</Checkbox>
                  </Form.Item>

                  <a
                    className="text-p-blue"
                    style={{ float: 'right' }}
                    href="/forget"
                  >
                    忘记密码?
                  </a>
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
                  登录
                </Button>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Login
