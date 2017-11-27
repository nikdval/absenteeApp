import React from 'react';
import BigCalendar from 'react-big-calendar';
// import events from './events';
import moment from 'moment';

import HeaderMonth from './HeaderMonth';


BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component{
  constructor(props) {
    super(props);
  }
  eventStyleGetter (event, start, end, isSelected) {
    // console.log(event);
    // var backgroundColor = '#' + event.hexColor;
    var style = {
        // backgroundColor: backgroundColor,
        height: 15,
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
}

  render(){
    const { events } = this.props.absence
    return (
      <div className="col-md-4">
        <BigCalendar
          selectable
          events={this.props.absence}
          defaultView='month'
          defaultDate={this.props.month}
          culture="en-GB"
          eventPropGetter={(this.eventStyleGetter)}
          components={{
            toolbar: HeaderMonth
          }}     
        /> 
      </div>
    )
  }
}
