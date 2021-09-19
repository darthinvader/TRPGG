import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { BiMenuAltRight } from "react-icons/bi";
import styles from "./PhoneNavbar.module.scss";
import { useState } from "react";
import NavLine from "../NavLine/NavLine";

const PhoneNavbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const SideNav = `${styles.SideNav} ${showSideNav ? "" : styles.SideNavHide}`;
  return (
    <>
      <div className={styles.TopGap}></div>
      <div className={styles.TopNavContainer}>
        <div className={styles.TopNav}>
          <Login />
          <BiMenuAltRight
            className={styles.Burger}
            onClick={() => {
              setShowSideNav(!showSideNav);
            }}
          />
        </div>
        <NavLine />
      </div>
      <span className={SideNav}>
        <ul className={styles.Categories}>
          <li>
            <Link className={styles.Link} to="/books">
              Books
            </Link>
          </li>
          <li>
            <Link className={styles.Link} to="/generators">
              Generators
            </Link>
          </li>
          <li>
            <Link className={styles.Link} to="/characterSheet">
              Character Sheet
            </Link>
          </li>
        </ul>
      </span>
    </>
  );
};

export default PhoneNavbar;
