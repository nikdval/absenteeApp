import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';



BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component{

  render(){

    return (
      <div className="col-md-4">
        <BigCalendar
          events={events}
          defaultDate={new Date(2015, 3, 1)}
          culture="en-GB"
        />
      </div>
    )
  }
}

