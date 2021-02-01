import "./App.css"
import { useState, useEffect } from "react"
import { MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
} from 'antd';
import { isAuthenticated } from "../helpers/auth"
import { signup } from "../api/auth"
import { Link, useHistory } from "react-router-dom";


const RegistrationForm = () => {
    let history = useHistory();
    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
        }
        else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard')
        }
    }, [history])
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMsg: false
    });
    const
        {
            username,
            email,
            password,
            confirmPassword,
            errorMsg
        } = formData;
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })

    }
    const onFinish = (data) => {
        const { username, email, password } = formData;
        data = { username, email, password };
        signup(data)
            .then(response => {
                console.log(response);
            }).catch(err => {
                console.log("Signup Error: " + err);
            })
    };


    return (
        <Form

            className="login-form"
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Lütfen Kullanıcı Adınızı Giriniz',
                        whitespace: true,
                    },
                ]}
            >
                <Input placeholder="Kullanıcı Adı" name="username" onChange={handleChange} value={username} className="username-input" size="large" prefix={<UserOutlined className="site-form-item-icon" />} />
            </Form.Item>
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
                <Input placeholder="Email" name="email" onChange={handleChange} value={email} className="username-input" size="large" prefix={<MailOutlined className="site-form-item-icon" />} />
            </Form.Item>

            <Form.Item
                name="password"
                className="username-input"
                rules={[
                    {
                        required: true,
                        message: 'Lütfen Şifrenizi Giriniz',
                    },
                ]}
                hasFeedback
            >
                <Input.Password name="password" placeholder="Şifre" onChange={handleChange} value={password} prefix={<LockOutlined className="site-form-item-icon" />} className="username-input" size="large" />
            </Form.Item>

            <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Lütfen Şifrenizi Tekrar Giriniz',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('Şifreler Aynı Değil!!');
                        },
                    }),
                ]}
            >
                <Input.Password name="confirmPassword" placeholder="Şifreyi Tekrarla" onChange={handleChange} value={confirmPassword} prefix={<LockOutlined className="site-form-item-icon" />} className="username-input" size="large" />
            </Form.Item>



            <Form.Item>
                <Button className="login-form-button" size="large" type="primary" htmlType="submit">
                    Register
        </Button>
        Zaten Hesabınız Var mı? <Link to="/signin">Giriş Yapın</Link>

            </Form.Item>



        </Form>
    );
};
export default RegistrationForm;