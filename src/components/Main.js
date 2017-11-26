import React from 'react';
import Calendar from './calendar/Calendar';
import events from '../data/testData';
import AddForm from './AddForm';

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
      isOpen: false
    };
    this.dataConstructor= this.dataConstructor.bind(this);
    this.toggleModal= this.toggleModal.bind(this);
  }
  componentDidMount() {
    /**
 * Entrty point of data
 * Currently from JS object
 * Parse data thought API, RSS, websocket or any other alternative
 */
    let test = { events }.events[0].d1;
  
    let d = test.map(function (element, index) {
      let e = {
        "title": element.name,
        /*-----Alternative title-------
         "title": element.name + " - " + element.title,*/
        "start": new Date(element.start),
        "end": new Date(element.end)
      };
      return e;
    });
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
          <Calendar month={this.state.month1} absence={this.state.absences} />
          <Calendar month={this.state.month2} absence={this.state.absences} />
          <Calendar month={this.state.month3} absence={this.state.absences} />
        </div>
        <div className="row">
        		<button className="btn btn-default btn-block" data-toggle="modal" data-target="#myModal" onClick={this.toggleModal}>Open Modal</button>
            	<AddForm show={this.state.isOpen}
          onClose={this.toggleModal}/>
        	</div>
      </div>
    );
  }
  dataConstructor(data){

  }
  toggleModal () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}
