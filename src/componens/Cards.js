import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';

import iphone11 from "../images/iphone11.jpeg";
import Iphone12 from "../images/iphone12.jpeg";
import iphone12 from "../images/iphone12.jpeg";
import Iphone11 from "../images/iphone11.jpeg";


class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={iphone11} name="Iphon11" cost="500 $"/>
                <Card image={Iphone12} name="Iphonex" cost="300 $"/>
                <Card image={iphone12} name="Iphone12" cost="400 $"/>
                <Card image={Iphone11} name="iphone11" cost="700 $" />
                
            </div>
        );
    }
}

export default Cards;