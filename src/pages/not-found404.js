import { AppHeader } from "../components/app-header/app-header";
import styles from "./not-found404.module.css";

export default function NotFound404Page() {
  return (
    <>
      <AppHeader />
      <h1 className={styles.text}>¯\_(ツ)_/¯</h1>
      <h1 className={styles.text}>Ой, а где это мы ?</h1>
    </>
  );
}
