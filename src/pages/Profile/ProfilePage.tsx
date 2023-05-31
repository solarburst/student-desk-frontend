import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, notification, Image, message, Upload } from "antd";
import type { UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { logout } from "../../api"
import { setAuth } from '../../redux/auth';
import { setProfile } from '../../redux/profile';
import { defaultUser } from '../../api/dto/auth.dto';
import styles from "./index.module.scss";
import DefaultLayout from '../../layouts/DefaultLayout';

const ProfilePage: React.FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth)
  const { profile } = useSelector((state: RootState) => state.profile)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      await logout();

      notification.success({
        message: "Успешно!",
        description: "Переходим на главную...",
        duration: 2,
      });
  
      dispatch(setAuth(false))
      dispatch(setProfile(defaultUser))
  
      navigate("/");
    } catch (err) {
      console.warn("LoginForm", err);

      notification.error({
        message: "Ошибка!",
        description: "Неожиданная ошибка",
        duration: 2,
      });
    }
  };

  const props: UploadProps = {
    name: 'file',
    action: 'http://localhost:3000/user/avatar',
    withCredentials: true,
    // headers: {
    //   cookie: `Authentication=${cookie}`,
    // },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <DefaultLayout>
      <div className={styles.content}>
        {!isAuth ? 
            (<h1 className={styles.notAuth}>Необходимо войти в аккаунт</h1>) : 
            (
                <div className={styles.profile}>
                    <h2 className={styles.title}>Профиль</h2>
                    <Image src={profile.avatarId ? `http://localhost:3000/local-files/${profile.avatarId}` : `src/assets/noavatar.png`} />
                    <p className={styles.item}>Вакансия: {profile.vacancy}</p>
                    <p className={styles.item}>Имя: {profile.firstName}</p>
                    <p className={styles.item}>Фамилия: {profile.surName}</p>
                    <p className={styles.item}>E-mail: {profile.email}</p>
                    <p className={styles.item}>Телефон: {profile.phone || "Не указано"}</p>
                    <p className={styles.item}>Проекты: {profile.projects || "Не указано"}</p>
                    <p className={styles.item}>Место учебы: {profile.studyPlace || "Не указано"}</p>
                    <p className={styles.item}>Описание:</p>
                    <p className={styles.item}>{profile.description}</p>
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Загрузить аватар</Button>
                    </Upload>
                    <Button type="primary" onClick={onSubmit} className={styles.button}>
                        Выйти
                    </Button>
                </div>
            )
        }
      </div>
    </DefaultLayout>
  )
}

export default ProfilePage