import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';

import HeaderMonth from './HeaderMonth';


BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component{
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onSelect(){
   
  }
  render(){
    return (
      <div className="col-md-4">
        <BigCalendar
          selectable
          events={this.props.absence}
          views='month'
          defaultDate={this.props.month}
          culture="en-GB"
          components={{
            toolbar: HeaderMonth
          }}
          onSelectSlot={() => onSelect(this.toggleModal)}
        />
         <button onClick= {this.toggleModal}>
          Open the modal
        </button>
  
      </div>
    )
  }
}
