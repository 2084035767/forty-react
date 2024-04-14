import Logo from '@/assets/img/logo.png'
import Reset from '@/assets/svg/reset.svg'
import ValidateIcon from '@/assets/svg/validate.svg'
import { LeftOutlined } from '@ant-design/icons'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react'
import { Button, Form, Input } from 'antd'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Validate = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }
  const onChange = text => {
    console.log('onChange:', text)
  }
  const sharedProps = {
    onChange,
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = useState('opaque')

  const handleOpen = backdrop => {
    setBackdrop(backdrop)
    onOpen()
  }
  return (
    <div className="Validate h-screen grid grid-cols-2  items-center">
      <div className="left flex bg-[#CDE1FD] h-full justify-center items-center">
        <div className="logo absolute left-4 top-6">
          <img src={Logo} alt="logo" />
        </div>
        <img src={ValidateIcon} alt="svg" className="size-96" />
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
                  <a href="/forget">返回</a>
                </p>
                <p className="text-3xl">输入 验证码</p>
                <p className="text-xl text-s-blue">
                  我们已发送至您的邮箱，请注意查收。
                </p>
              </div>
              <div className="mb-2">验证码</div>
              <Form.Item>
                <Input.OTP length={6} {...sharedProps} />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(54, 98, 236, 0.8)',
                  }}
                  onClick={() => handleOpen('blur')}
                >
                  验证
                </Button>
                <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
                  <ModalContent>
                    {onClose => (
                      <>
                        <ModalBody className="flex flex-col justify-center">
                          <img
                            src={Reset}
                            alt="重置"
                            className="size-30 mx-auto my-5"
                          />
                          <div className="mb-10 text-center ">
                            <p className="text-3xl text-p-blue mb-2">
                              重置密码成功
                            </p>
                            <p className="text-xl text-s-blue">
                              您的密码已成功更新
                            </p>
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                              width: '80%',
                              backgroundColor: 'rgba(54, 98, 236, 0.8)',
                            }}
                            onClick={onClose}
                            className="mx-auto"
                          >
                            返回登录
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Validate
