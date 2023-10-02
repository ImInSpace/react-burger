import { AppHeader } from "../components/app-header/app-header";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { EditProfile } from "../components/edit-profile";

export default function Profile() {
  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.container}>
          <div className="menu">
            <div className={styles.menuCell}>
              <Link to="#" className={styles.link}>
                <p className="text text_type_main-medium">Профиль</p>
              </Link>
            </div>
            <div className={styles.menuCell}>
              <Link to="#" className={styles.link}>
                <p className="text text_type_main-medium">История заказов</p>
              </Link>
            </div>
            <div className={styles.menuCell}>
              <Link to="#" className={styles.link}>
                <p className="text text_type_main-medium">Выход</p>
              </Link>
            </div>
          </div>
          <div className={styles.subMenu}>
            <EditProfile />
          </div>
        </div>
      </div>
    </>
  );
}
