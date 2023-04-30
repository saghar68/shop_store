import React from 'react';
import styles from "../componens/Navbar.module.css";
import logo from "../images/logo.svg"

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home page</li>
                    <li>Products</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>
        </header>
    );
};

export default Navbar;