import React, { Component } from 'react';
import styles from "./serach.module.css";
class search extends Component {

    constructor () {
        super();
        this.state = {
            text: "",
        }
    }

    changeHandler = event => {
        this.setState ({
            text: event.target.value,
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <p>Serach what you want</p>
                <div>
                <input type="text" value={this.state.text} onChange={this.changeHandler} placeholder="Serach ..." />
                <br />
                 <br />
                
                <span>{this.state.text}</span>
                </div>
                
            </div>
        );
    }
}

export default search;