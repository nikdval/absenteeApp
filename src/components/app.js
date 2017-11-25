import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import base from '../css/base.scss';
require("!style!css!react-big-calendar/lib/css/react-big-calendar.css")

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}
