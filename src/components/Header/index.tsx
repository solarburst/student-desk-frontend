import { Layout, Menu } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import styles from "./index.module.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state: RootState) => state.auth)

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <GlobalOutlined />
            Student Desk
          </h2>
          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}
            onSelect={({ key }) => navigate(key)}
            items={[
              { key: "/", label: "Главная" },
            ]}
          />
        </div>
        <div className={styles.headerRight}>
          {!isAuth ? (<Menu
            className={styles.topMenuRight}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}
            onSelect={({ key }) => navigate(key)}
            items={[
              { key: "/login", label: "Войти" },
              { key: "/register", label: "Зарегистрироваться" },
            ]}
          />) : <Menu
          className={styles.topMenuRight}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          onSelect={({ key }) => navigate(key)}
          items={[
            { key: "/profile", label: "Профиль" },
          ]}
        />}
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;