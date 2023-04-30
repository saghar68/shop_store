import React, { Component } from 'react';

import Navbar from "./componens/Navbar"
import Banner from './componens/Banner';
import Cards from './componens/Cards';
import Search from "./componens/search";
import Logos from "./componens/logos";
import Footer from "./componens/footer";


import "./index.css";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <Cards />
                <Search />
                <Logos />
                <Footer />
            </div>
        )
    }
}

export default App;