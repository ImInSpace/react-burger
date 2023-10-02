import { AppHeader } from "../components/app-header/app-header";
import styles from "./profile.module.css";
import { EditProfile } from "../components/profile/edit-profile";
import { useState } from "react";
import { MenuItem } from "../components/profile/menu-item";

export default function Profile() {
  const [activeMenu, setActiveMenu] = useState([true, false, false]);

  const onMenuClickHandler = () => {
    // ToDo: Переключатель меню.
  };

  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.container}>
          <div className="menu">
            <MenuItem caption="Профиль" link="#" isActive={true} />
            <MenuItem caption="История заказов" link="#" isActive={false} />
            <MenuItem caption="Выход" link="#" isActive={false} />
          </div>
          <div className={styles.subMenu}>
            <EditProfile />
          </div>
        </div>
      </div>
    </>
  );
}
