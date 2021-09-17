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
            <Link className={styles.Link} to="/Generators">
              Generators
            </Link>
          </li>
          <li>
            <Link className={styles.Link} to="/SoundEffects">
              Sound Effects
            </Link>
          </li>
        </ul>
      </span>
    </>
  );
};

export default PhoneNavbar;
