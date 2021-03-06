import React from 'react';
import Header from './base/Header';
import Footer from './base/Footer';
import Main from './Main';
import UserHeader from './base/UserHeader';

import base from '../css/base.scss';
require('!style!css!react-big-calendar/lib/css/react-big-calendar.css')

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: this.props,
            user:{
                id:5,
                name: 'Mark Twain',
                leftDays:12      
            }
        };
    }
    render() {
        return (
            <div>
                <Header /> 
                <UserHeader user={this.state.user} />
                <Main  user={this.state.user} />
                <Footer />
            </div>
        );
    }
}
