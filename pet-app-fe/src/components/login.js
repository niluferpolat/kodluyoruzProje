import { Form, Input, Button, Checkbox } from 'antd';
import "./App.css"
import { Link } from "react-router-dom"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const NormalLoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (

        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >

            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Lütfen Kullanıcı Adınızı Girin!',
                    },
                ]}
            >
                <Input
                    size="large"
                    className="username-input"
                    prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Kullanıcı Adı" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Lütfen Şifrenizi Girin!',
                    },
                ]}
            >
                <Input
                    size="large"
                    className="password-input"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Şifre"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Beni Hatırla</Checkbox>
                </Form.Item>


            </Form.Item>

            <Form.Item>
                <Button size="large" type="default" htmlType="submit" className="login-form-button">
                    Giriş Yap
        </Button>
        Ya Da <Link to="/signup">Üye Olun!</Link>
            </Form.Item>
        </Form>
    );
};

export default NormalLoginForm;
