import React from 'react';
import ReactDOM from 'react-dom';
import EventCalendar from 'react-event-calendar';
import moment from 'moment';
import TestData from './TestData.js';


export default class TestCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moment: moment(),
            showPopover: false,
            showModal: false,
            overlayTitle: null,
            overlayContent: null,
            popoverTarget: null,
        };

        this.handleNextMonth = this.handleNextMonth.bind(this);
        this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
        this.handleToday = this.handleToday.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleEventMouseOver = this.handleEventMouseOver.bind(this);
        this.handleEventMouseOut = this.handleEventMouseOut.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleNextMonth() {
        this.setState({
            moment: this.state.moment.add(1, 'M'),
        });
    }

    handlePreviousMonth() {
        this.setState({
            moment: this.state.moment.subtract(1, 'M'),
        });
    }

    handleToday() {
        this.setState({
            moment: moment(),
        });
    }

    handleEventMouseOver(target, eventData, day) {
        this.setState({
            showPopover: true,
            popoverTarget: () => ReactDOM.findDOMNode(target),
                overlayTitle: eventData.title,
                overlayContent: eventData.description,
        });
    }

    handleEventMouseOut(target, eventData, day) {
        this.setState({
            showPopover: false,
        });
    }

    handleEventClick(target, eventData, day) {
        this.setState({
            showPopover: false,
            showModal: true,
            overlayTitle: eventData.title,
            overlayContent: eventData.description,
        });
    }

    handleDayClick(target, day) {
        this.setState({
            showPopover: false,
            showModal: true,
            overlayTitle: this.getMomentFromDay(day).format('Do of MMMM YYYY'),
            overlayContent: 'User clicked day (but not event node).',
        });
    }

    getMomentFromDay(day) {
        return moment().set({
            'year': day.year,
            'month': (day.month + 0) % 12,
            'date': day.day
        });
    }

    handleModalClose() {
        this.setState({
            showModal: false,
        })
    }

    getHumanDate() {
        return [moment.months('MM', this.state.moment.month()), this.state.moment.year(), ].join(' ');
    }

    render() {

        const styles = {
            position: 'relative',
        };

        return (
            <div style={styles}>  
                    <div className="row">
                        <div className="col-6">
                            <EventCalendar
                                month={this.state.moment.month()}
                                year={this.state.moment.year()}
                                events={TestData.getEvents()}
                                onEventClick={this.handleEventClick}
                                onEventMouseOver={this.handleEventMouseOver}
                                onEventMouseOut={this.handleEventMouseOut}
                                onDayClick={this.handleDayClick}
                                maxEventSlots={10}
                            />
                        </div>
                    </div>      
            </div>)
  }

}