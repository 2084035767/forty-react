import Logo from '@/assets/img/logo.png'
import SignUp from '@/assets/svg/sign_up.svg'
import { Button, Checkbox, Form, Input } from 'antd'
import { motion } from 'framer-motion'
const Register = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }
  return (
    <div className="Register h-screen grid grid-cols-2  items-center">
      <div className="left flex bg-[#CDE1FD] h-full justify-center items-center">
        <div className="logo absolute left-4 top-6">
          <img src={Logo} alt="logo" />
        </div>
        <img src={SignUp} alt="svg" className="size-96" />
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
                <p className="text-3xl">创建新账户</p>
                <p className="text-xl text-s-blue">请输入详细信息</p>
              </div>
              <Form.Item
                name="username"
                className="text-p-blue"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <div>
                  <div className="mb-2">用户名</div>
                  <Input className="border-p-blue" placeholder="Username" />
                </div>
              </Form.Item>
              <Form.Item
                name="username"
                className="text-p-blue"
                rules={[
                  { required: true, message: 'Please input your Nickname!' },
                ]}
              >
                <div>
                  <div className="mb-2">昵称</div>
                  <Input className="border-p-blue" placeholder="Nickname" />
                </div>
              </Form.Item>
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
                  <div className="mb-2">密码</div>
                  <Input
                    type="password"
                    className="border-p-blue"
                    placeholder="Password"
                  />
                </div>
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="text-p-blue">我同意条款和条件</Checkbox>
                </Form.Item>
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
export default Register
