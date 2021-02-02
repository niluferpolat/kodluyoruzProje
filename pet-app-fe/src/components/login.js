import { Form, Input, Button, Checkbox } from 'antd';
import "./App.css";
import { useState, useEffect } from "react"
import { setAuthentication, isAuthenticated } from "../helpers/auth"
import { Link, useHistory } from "react-router-dom"
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { signin } from '../api/auth';
const NormalLoginForm = () => {
    let history = useHistory();
    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
        }
        else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/')
        }
    }, [history])
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        errorMsg: false,

    });
    const {
        email,
        password,
        

    } = formData;
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const onFinish = (data) => {
        const { email, password } = formData;
        data = { email, password };
        signin(data)
            .then(response => {
                setAuthentication(response.data.token, response.data.user);
                if (isAuthenticated() && isAuthenticated().role === 1) {
                    console.log("redirecting to admin");
                    history.push('/admin/dashboard');
                }
                else {
                    console.log("redirecting to user");
                    history.push('/user/dashboard')
                }
            })
            .catch(err => {
                console.log("signin fonksiyonu hatası: ", err);
            });
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
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'Lütfen Geçerli Bir Email Giriniz',
                    },
                    {
                        required: true,
                        message: 'Lütfen Bir Email Adresi Giriniz',
                    },
                ]}
            >
                <Input
                    size="large"
                    className="username-input"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                    name="password"
                    className="password-input"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    value={password}
                    type="password"
                    onChange={handleChange}
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
        Hesabınız yok mu? <Link to="/signup">Üye Olun</Link>
            </Form.Item>
        </Form>
    );
};

export default NormalLoginForm;
