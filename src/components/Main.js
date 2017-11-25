import React from 'react';
import Calendar from './calendar/Calendar';

let day= new Date();
let year= day.getFullYear();
let month2 = day.getMonth()+1;
let month3= month2+1;


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month1: day,
      month2:new Date(year, month2, 1),
      month3:new Date(year, month3, 1),
    };
  }
  render() {
    return (
      <div className="main container">
        <div className="row">

          <Calendar  month={this.state.month1}/>
          <Calendar  month={this.state.month2}/>
          <Calendar  month={this.state.month3}/>

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
