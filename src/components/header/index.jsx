import styles from "./styles.module.css";
import logo from "../../assets/icons/logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.headerLogo} src={logo} alt="logo" />
      <div className={styles.headerLinkContainer}>
        <a className={styles.headerLink} href="!#">
          Home
        </a>
        <a className={styles.headerLink} href="!#">
          Music
        </a>
        <a className={styles.headerLink} href="!#">
          Groups
        </a>
        <a className={styles.headerLink} href="!#">
          Friends
        </a>
      </div>
    </div>
  );
}

export default Header;
