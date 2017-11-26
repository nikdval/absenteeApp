import React from 'react';
import BigCalendar from 'react-big-calendar';
// import events from './events';
import moment from 'moment';

import HeaderMonth from './HeaderMonth';

BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component{
  
  render(){
    const { events } = this.props.events
    return (
      <div className="col-md-4">
        <BigCalendar
          events={events}
          views='month'
          defaultDate={this.props.month}
          culture="en-GB"
          components={{
            toolbar: HeaderMonth
          }}
        />
      </div>
    )
  }
}

