import styles from "./profile.module.css";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../services/actions/auth";
import { getCookie } from "../services/cookieManager";
import { ILogoutRequestBody } from "../utils/api-shape";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Profile(): JSX.Element {
  const dispatch = useDispatch();

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
            >
              История заказов
            </NavLink>
            <Link
              to={"#"}
              className={
                styles.container +
                " text text_type_main-default text_color_inactive"
              }
              onClick={() => logout()}
            >
              Выход
            </Link>

            <div className={styles.menuDescription}>
              <p className="text text_type_main-default text_color_inactive mt-20">
                В этом разделе вы можете изменить свои персональные данные
              </p>
            </div>
          </div>
          <div className={styles.subMenu}>
            {/* {activeMenu[0] && <EditProfile />} */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
