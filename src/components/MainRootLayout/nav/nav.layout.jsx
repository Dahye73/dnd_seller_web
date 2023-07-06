import Item from "./item/item";
import styles from "./nav.module.css";
import NavTitle from "./title/navTitle";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavTitle />
      <Item />
    </nav>
  );
};

export default Nav;
