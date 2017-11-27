import React from 'react';
import moment from 'moment';

export default class HeaderMonth extends React.Component{
  constructor(props) {
    super(props);
    let label = this.props.label
    let titleArray = label.split(" ");
    this.state = {
      month: titleArray[0],
      year: titleArray[1],
      monthNum: moment().month(titleArray[0]).format("M")
    };
  }
    render(){
        let { label } = this.props;
        // let {month} = {label}.split(" ",2)
        let {num} = "1";
        
        // console.log({label})
        return (
          <div className="headermonth">
          <div className= "col-md-4 monthNum">
            <h1 className="text-center text-white">{ this.state.monthNum } </h1>
          </div>
          <div className = "col-md-8 monthLabel">
          <p className="text-right text-white">  { this.state.month }</p>
          <h2 className="text-right text-white">  { this.state.year }</h2>
          </div>
          </div>
        )
      }
      
  }