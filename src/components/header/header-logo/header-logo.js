import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-logo.module.css";

function HeaderLogo() {
  return (
    <div className={styles.logo}>
      <Logo />
    </div>
  );
}

export { HeaderLogo };
