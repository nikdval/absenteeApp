import React from 'react';
import Calendar from './calendar/Calendar';
import events from '../data/testData'

let day= new Date();
let year= day.getFullYear();
let month2 = day.getMonth()+1;
let month3= month2+1;
const d={events};
const data = d.events[0].absence;

console.log(data);


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      absence: {data},
      month1: day,
      month2:new Date(year, month2, 1),
      month3:new Date(year, month3, 1),
    };
    this.dataConstructor = this.dataConstructor.bind(this);
  }
  dataConstructor(props){
    const data = props.absence;
    const events = 
    console.log(props.absence);
  }
  render() {

    return (
      <div className="main container">
        <div className="row">
          <Calendar  month={this.state.month1} absence={events}/>
          <Calendar  month={this.state.month2} absence={events}/>
          <Calendar  month={this.state.month3} absence={events}/>
        </div>

      </div>
    );
  }
  getDate(){
    const month= new Date(today.getMonth());
    return month;
    console.log(month)
  }
    
}
