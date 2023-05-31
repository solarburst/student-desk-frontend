import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from "./index.module.scss";
import DefaultLayout from '../../layouts/DefaultLayout';
import { LoginFormDTO } from '../../api/dto/auth.dto';
import { login } from "../../api"
import { setAuth } from '../../redux/auth';
import { setProfile } from '../../redux/profile';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const user = await login(values);

      console.log('user', user);

      if (user) {
        notification.success({
          message: "Успешно!",
          description: "Переходим на главную...",
          duration: 2,
        });
  
        dispatch(setAuth(true))
        dispatch(setProfile(user))
  
        navigate("/");
      }
    } catch (err) {
      console.warn("LoginForm", err);

      notification.error({
        message: "Ошибка!",
        description: "Неверный логин или пароль",
        duration: 2,
      });
    }
  };

  return (
    <>
    <DefaultLayout>
      <div className={styles.content}>
        <h3 className={styles.title}>Login</h3>
        <div className={styles.formBlock}>
          <Form
            name="normal_login"
            className={styles.loginform}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Введите почту' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="E-mail" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Введите пароль' }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.button}>
                Войти
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </DefaultLayout>
    </>
  );
};

export default LoginPage;