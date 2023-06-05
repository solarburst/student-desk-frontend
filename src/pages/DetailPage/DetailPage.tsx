import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from "antd";
import { getById } from '../../api/search'
import { LoginResponseDTO } from '../../api/dto/auth.dto';
import DefaultLayout from '../../layouts/DefaultLayout';
import styles from "./index.module.scss";

const DetailPage = () => {
  const [user, setUser] = useState<LoginResponseDTO | null>(null);

  const { id } = useParams();

  const getUser = async (id: string) => {
    const user = await getById(id);
    setUser(user);
    return user;
  }

  useEffect(() => {
    if (id) {
        getUser(id);
    }
  }, [])

  return (
    <DefaultLayout>
        <div className={styles.content}>
            <div className={styles.profile}>
                <h2 className={styles.title}>Профиль</h2>
                <Image src={user?.avatarId ? `http://localhost:3000/local-files/${user.avatarId}` : `/src/assets/noavatar.png`} />
                <p className={styles.item}>Вакансия: {user?.vacancy}</p>
                <p className={styles.item}>Имя: {user?.firstName}</p>
                <p className={styles.item}>Фамилия: {user?.surName}</p>
                <p className={styles.item}>E-mail: {user?.email}</p>
                <p className={styles.item}>Телефон: {user?.phone || "Не указано"}</p>
                <p className={styles.item}>Проекты: {user?.projects || "Не указано"}</p>
                <p className={styles.item}>Место учебы: {user?.studyPlace || "Не указано"}</p>
                <p className={styles.item}>Описание:</p>
                <p className={styles.item}>{user?.description}</p>
            </div>
        </div>
    </DefaultLayout>
  )
}

export default DetailPage