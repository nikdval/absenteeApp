import React from 'react';
import Calendar from './calendar/Calendar';
import events from '../data/testData';
import AddModal from './forms/AddModal';

let day = new Date();
let year = day.getFullYear();
let month2 = day.getMonth() + 1;
let month3 = month2 + 1;



export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      absences: [],
      month1: day,
      month2: new Date(year, month2, 1),
      month3: new Date(year, month3, 1),
      isOpen: false,
      triggerData: ''
    };
    let user = this.props.name
    this.dataConstructor = this.dataConstructor.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onSelectDay = this.onSelectDay.bind(this);
   
  }
  componentDidMount() {
    /**
 * Entrty point of data
 * Currently from JS object
 * Parse data thought HTTP, RSS, websocket or any other alternative
 */
    const members = events[0].d1;
    const d = this.dataConstructor(members);
    this.componentWillReceiveProps(d);
  }
  componentWillReceiveProps(data) {
    this.setState({
      absences: data
    });
  }
  render() {
    return (
      <div className="main container">
        <div className="row">
          <Calendar month={this.state.month1} absence={this.state.absences} trigger={this.onSelectDay} />
          <Calendar month={this.state.month2} absence={this.state.absences} trigger={this.onSelectDay} />
          <Calendar month={this.state.month3} absence={this.state.absences} trigger={this.onSelectDay} />
        </div>
        <div className="row">
          <button className="btn invisible" id="openModal" data-toggle="modal" data-target="#myModal" onClick={this.toggleModal}>Open Modal</button>
          <AddModal show={this.toggleModal}
            onClose={this.toggleModal} 
            date={this.state.triggerData} />
        </div>
      </div>
    );
  }
  /* Team members data constructor*/
  dataConstructor(data) {
    let holder = data.map(function (element, index) {
      let unit = (element.unit == 'AM' ? 'Morning' : element.unit == 'PM' ? 'Afternoon' : 'All day');
      let e = {
        "title": element.name + ": Absent " + unit,
        /*-----Alternative title-------
         "title": element.name + " - " + element.title,*/
        "start": new Date(element.start),
        "end": new Date(element.end),
        "user": element.currentuser
      };
      return e;
    });
    return holder;
  }
  /*AddForm */
  onSelectDay(selectDay) {
    this.setState({
      triggerData: selectDay
    });
    document.getElementById('openModal').click();
   
  }
  
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}
