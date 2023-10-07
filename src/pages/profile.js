import { AppHeader } from "../components/app-header/app-header";
import styles from "./profile.module.css";
import { EditProfile } from "../components/profile/edit-profile";
import { useState } from "react";
import { MenuItem } from "../components/profile/menu-item";
import { useDispatch } from "react-redux";
import { logoutActionGen } from "../services/actions/auth";
import { getCookie } from "../services/cookieManager";

export default function Profile() {
  const dispatch = useDispatch();

  const initialState = [true, false, false];
  const [activeMenu, setActiveMenu] = useState(initialState);

  const onMenuClickHandler = (index) => {
    const newState = [false, false, false];
    newState[index] = true;
    setActiveMenu(newState);

    if (index === 2) {
      logout();
    }
  };

  const logout = () => {
    dispatch(logoutActionGen(getCookie("refreshToken")));
  };

  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.container}>
          <div className="menu">
            <MenuItem
              caption="Профиль"
              link="#"
              isActive={activeMenu[0]}
              onClickHandler={() => onMenuClickHandler(0)}
            />
            <MenuItem
              caption="История заказов"
              link="#"
              isActive={activeMenu[1]}
              onClickHandler={() => onMenuClickHandler(1)}
            />
            <MenuItem
              caption="Выход"
              link="#"
              isActive={activeMenu[2]}
              onClickHandler={() => onMenuClickHandler(2)}
            />
          </div>
          <div className={styles.subMenu}>
            {activeMenu[0] && <EditProfile />}
          </div>
        </div>
      </div>
    </>
  );
}
