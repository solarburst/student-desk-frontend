import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Input, Spin } from 'antd';
import { getAll, getByVacancy } from '../../api/search';
import { LoginResponseDTO } from '../../api/dto/auth.dto';
import styles from "./index.module.scss";
import DefaultLayout from '../../layouts/DefaultLayout';
import UserCard from '../../components/Card';

const { Search } = Input;

const HomePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState<Array<LoginResponseDTO> | []>([]);

  const onSearch = async (searchValue: string) => {
    if (searchValue !== "") {
      const users = await getByVacancy(searchValue);
      setUsers(users);
    }
    else {
      const users = await getAll();
      setUsers(users);
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
            <>{users.map((user) => (<Link to={`/detail/${user.id}`}><UserCard key={user.id} {...user} /></Link>))}</>
          </div>
        </div>
      </div>
    </DefaultLayout>
    </>
  );
};

export default HomePage;