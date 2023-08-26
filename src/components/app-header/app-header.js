import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavMenuItem } from "../nav-menu-item/nav-menu-item";

function AppHeader() {
  return (
    <>
      <div>
        <div className="m-25 pl-25">
          <NavMenuItem text="Конструктор" />
          <Logo />
        </div>
      </div>
    </>
  );
}

export { AppHeader };
