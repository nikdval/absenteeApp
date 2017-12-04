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
      month: '',
    };
    this.selectHandler = this.selectHandler.bind(this);
    this.styleConstructor = this.styleConstructor.bind(this);
   
  }

  styleConstructor(color){
    let tempstyle={
      backgroundColor: eventColor,
      opacity: 0.9,
      height: 15,
      borderRadius: '0px',
      border: '0px',
      display: 'block'
    }
    return tempstyle

  }
  eventStyleGetter (event, start) {
    const colorArray=['#ffd68f','#a0d4f5', '#d0baab', '#f93411']
    const eventBgColor = event.user? colorArray[0]:event.project?colorArray[3]: colorArray[1]; 
    const eventColor = event.user? '#532A2A':'#1D242A'; 
    
    const holidayStyle={
      backgroundColor: colorArray[2],
      opacity: 0.5,
      color: colorArray[2],
      width: '16px',
      height: '16px',
      position: 'relative',
      bottom: '22px',
      borderRadius: '50%',
      border: '0px',
    }
    const absenceStyle = {
      backgroundColor: eventBgColor,
      color:eventColor,
      fontWeight:600,
      opacity: 0.9,
      height: 16,
      borderRadius: '0px',
      border: '0px',
      display: 'block'
    }
    const style= event.holiday?holidayStyle: absenceStyle;
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
    console.log(this.props.month);
    const classMobile = 'col-md-4 col-sm-12 '+ this.props.classHide
    return (
      <div className={classMobile}>
        <BigCalendar
          selectable
          popup
          events={this.props.absence}
          defaultView='month'
          views={['month']}
          defaultDate={this.props.month}
          culture='en-GB'
          onSelectSlot={(slotInfo) => (this.selectHandler(slotInfo))}
          eventPropGetter={(this.eventStyleGetter)}
          onNavigate={this.props.onNavigate}
          components={{
            toolbar: HeaderMonth,
            slotPropGetter: (date: Date) => { className: 'holiday'}
          }}     
        /> 
      </div>
    )
  }
}
