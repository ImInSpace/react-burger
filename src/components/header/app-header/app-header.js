import { HeaderMenu } from "../header-menu/header-menu";
import { LoginBtn } from "../login-btn/login-btn";
import { HeaderLogo } from "../header-logo/header-logo";
import styles from "./app-header.module.css";

function AppHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <HeaderMenu />
        <HeaderLogo />
        <LoginBtn />
      </div>
    </div>
  );
}

export { AppHeader };
