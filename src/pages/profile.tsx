import styles from "./profile.module.css";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../services/actions/auth";
import { getCookie } from "../services/cookieManager";
import { ILogoutRequestBody } from "../utils/api-shape";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

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

  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                styles.container +
                (isActive
                  ? " text text_type_main-default " + styles.active
                  : " text text_type_main-default text_color_inactive ")
              }
              end
              onClick={() => setHintText(profileHint)}
            >
              Профиль
            </NavLink>
            <NavLink
              to={"/profile/orders"}
              className={({ isActive }) =>
                styles.container +
                (isActive
                  ? " text text_type_main-default " + styles.active
                  : " text text_type_main-default text_color_inactive ")
              }
              onClick={() => setHintText(ordersHint)}
            >
              История заказов
            </NavLink>
            <Link
              to={"#"}
              className={
                styles.container +
                " text text_type_main-default text_color_inactive"
              }
            >
              Выход
            </Link>

            <div className={styles.menuDescription}>
              <p className="text text_type_main-default text_color_inactive mt-20">
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
