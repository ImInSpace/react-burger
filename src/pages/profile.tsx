import styles from "./profile.module.css";
import { EditProfile } from "../components/profile/edit-profile/edit-profile";
import { useState } from "react";
import { MenuItem } from "../components/profile/menu-item/menu-item";
import { useDispatch } from "react-redux";
import { logoutActionGen } from "../services/actions/auth";
import { getCookie } from "../services/cookieManager";

export default function Profile(): JSX.Element {
  const dispatch = useDispatch();

  const initialState = [true, false, false];
  const [activeMenu, setActiveMenu] = useState(initialState);

  const onMenuClickHandler = (index: number) => {
    const newState = [false, false, false];
    newState[index] = true;
    setActiveMenu(newState);

    if (index === 2) {
      logout();
    }
  };

  const logout = () => {
    // @ts-ignore
    dispatch(logoutActionGen(getCookie("refreshToken")));
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <MenuItem
              caption="Профиль"
              link="/profile"
              isActive={activeMenu[0]}
              onClickHandler={() => onMenuClickHandler(0)}
            />
            <MenuItem
              caption="История заказов"
              link="/profile/orders"
              isActive={activeMenu[1]}
              onClickHandler={() => onMenuClickHandler(1)}
            />
            <MenuItem
              caption="Выход"
              link="#"
              isActive={activeMenu[2]}
              onClickHandler={() => onMenuClickHandler(2)}
            />
            <div className={styles.menuDescription}>
              <p className="text text_type_main-default text_color_inactive mt-20">
                В этом разделе вы можете изменить свои персональные данные
              </p>
            </div>
          </div>
          <div className={styles.subMenu}>
            {activeMenu[0] && <EditProfile />}
          </div>
        </div>
      </div>
    </>
  );
}
