import styles from "./profile.module.css";
import { useDispatch } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { getCookie } from "../../services/cookieManager";
import { ILogoutRequestBody } from "../../utils/api-shape";
import { logoutThunk } from "../../services/actions/auth";

export default function Profile(): JSX.Element {
  const ordersHint =
    "В этом разделе вы можете просмотреть свою историю заказов";
  const profileHint =
    "В этом разделе вы можете изменить свои персональные данные";

  const dispatch = useDispatch();
  const [hintText, setHintText] = useState(profileHint);

  const logout = () => {
    const refreshToken = getCookie("refreshToken");
    if (!refreshToken) {
      console.error("Отсутствует refreshToken");
      return;
    }

    const logoutBody: ILogoutRequestBody = {
      token: refreshToken,
    };

    dispatch(logoutThunk(logoutBody));
  };

  const activeLinkStyle = `text text_type_main-medium ${styles.active}`;
  const inactiveLinkStyle = `text text_type_main-medium text_color_inactive ${styles.link}`;

  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                isActive ? activeLinkStyle : inactiveLinkStyle
              }
              end
              onClick={() => setHintText(profileHint)}
            >
              Профиль
            </NavLink>
            <NavLink
              to={"/profile/orders"}
              className={({ isActive }) =>
                isActive ? activeLinkStyle : inactiveLinkStyle
              }
              onClick={() => setHintText(ordersHint)}
            >
              История заказов
            </NavLink>
            <Link to={"#"} className={inactiveLinkStyle} onClick={logout}>
              Выход
            </Link>

            <div className={styles.menuDescription}>
              <p className=" text text_type_main-default text_color_inactive mt-20">
                {hintText}
              </p>
            </div>
          </div>
          <div className={styles.subMenu}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
