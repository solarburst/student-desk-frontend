import React, { useState } from 'react';
import { Input, Spin } from 'antd';
import { getAll, getByVacancy } from '../../api/search';
import { LoginResponseDTO } from '../../api/dto/auth.dto';
import styles from "./index.module.scss";
import DefaultLayout from '../../layouts/DefaultLayout';
import UserCard from '../../components/Card';

const { Search } = Input;

const HomePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState(Array<LoginResponseDTO>);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = async (searchValue: string) => {
    try {
      if (searchValue !== "") {
        setIsLoading(true);
        const users = await getByVacancy(searchValue);
        setUsers(users);
      }
      else {
        const users = await getAll();
        setUsers(users);
      }
      await new Promise((res, reject) => setTimeout(res, 2000));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <DefaultLayout>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Доска студентов</h1>
          <Search
            className={styles.search}
            placeholder="Поиск"
            allowClear
            enterButton="Найти"
            size="large"
            style={{ color: "black" }}
            value={searchValue}
            onSearch={onSearch}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className={styles.cards}>
            {isLoading ? (
              <Spin tip="Loading" size="large" />
            ) : <>{users.map((user) => (<UserCard key={user.id} {...user} />))}</>}
          </div>
        </div>
      </div>
    </DefaultLayout>
    </>
  );
};

export default HomePage;