import Item from "./item/item";
import LogoutButton from "./logoutBtn/logout.button";
import styles from "./nav.module.css";
import NavTitle from "./title/navTitle";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavTitle />
        <Item />
      </div>
      <div className={styles.button}>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Nav;
