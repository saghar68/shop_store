import React from 'react';

import styles from "./logos.module.css";
import apple from "../images/apple.png";
import pinkpng from "../images/PinkPng.png";
import sumsung from "../images/sumsung.png"

const logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={apple} alt="logo" />
                <img src={pinkpng} alt="logo" />
                <img src={sumsung} alt="logo" />
            </div>
        </div>
    );
};

export default logos;