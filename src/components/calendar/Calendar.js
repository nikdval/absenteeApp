import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import HeaderMonth from './HeaderMonth';


BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      absence: [],
      month: "",
    };
    this.selectHandler = this.selectHandler.bind(this);
  }
  eventStyleGetter (event, start, end, isSelected) {
    var style = {
        backgroundColor: (event.user==true? "red":"blue"),
        height: 15,
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
}
/* Open add form and parse data */
selectHandler(e){ 
  const {trigger} = this.props;
  trigger(e);
}
componentWillMount(){
  this.componentWillReceiveProps(this.props.absence, this.props.month)
}
componentWillReceiveProps(data,month){
  this.setState({
    absence: data,
    month:month
  })
}

  render(){
    return (
      <div className="col-md-4 col-sm-10">
        <BigCalendar
          selectable
          events={this.props.absence}
          defaultView='month'
          defaultDate={this.state.month}
          culture="en-GB"
          onSelectSlot={(slotInfo) => (this.selectHandler(slotInfo))}
          eventPropGetter={(this.eventStyleGetter)}
          components={{
            toolbar: HeaderMonth
          }}     
        /> 
      </div>
    )
  }
}
