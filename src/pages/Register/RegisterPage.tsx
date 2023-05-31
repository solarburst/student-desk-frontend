import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from "antd";
import styles from "./index.module.scss";
import DefaultLayout from '../../layouts/DefaultLayout';
import { RegisterFormDTO } from '../../api/dto/auth.dto';
import { register } from "../../api"


const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = async (values: RegisterFormDTO) => {
    try {
      const user = await register(values);

      console.log('register user', user);

      notification.success({
        message: "Успешно!",
        description: "Переходим на главную, теперь вы можете войти",
        duration: 2,
      });

      navigate("/");
    } catch (err) {
      console.warn("LoginForm", err);

      notification.error({
        message: "Ошибка!",
        description: "Проверьте данные",
        duration: 2,
      });
    }
  };

  return (
    <>
    <DefaultLayout>
      <div className={styles.content}>
        <h3 className={styles.title}>Register</h3>
        <div className={styles.formBlock}>
          <Form
            name="register"
            className={styles.loginform}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
          >
            <Form.Item
              name="firstName"
              label="Имя"
              rules={[{ required: true, message: "Укажите имя" }]}
            >
              <Input placeholder="Имя" />
            </Form.Item>

            <Form.Item
              name="surName"
              label="Фамилия"
              rules={[{ required: true, message: "Укажите фамилию" }]}
            >
              <Input placeholder="Фамилия" />
            </Form.Item>

            <Form.Item
              name="vacancy"
              label="Вакансия"
              rules={[{ required: true, message: "Укажите вакансию" }]}
            >
              <Input placeholder="Вакансия" />
            </Form.Item>

            <Form.Item
              name="description"
              label="О себе"
              rules={[{ required: true, message: 'Введите информацию о себе' }]}
            >
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Номер телефона"
            >
                <Input placeholder="Номер телефона" />
            </Form.Item>

            <Form.Item
              name="projects"
              label="Github"
            >
                <Input placeholder="Ссылка на github профиль" />
            </Form.Item>

            <Form.Item
              name="studyPlace"
              label="Место учебы"
            >
                <Input placeholder="Место учебы" />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[{ required: true, message: 'Введите почту' }]}
            >
              <Input placeholder="E-mail" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Пароль"
              rules={[{ required: true, message: 'Введите пароль' }]}
            >
              <Input
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.button}>
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </DefaultLayout>
    </>
  )
}

export default RegisterPage