import React from 'react';
import moment from 'moment';

export default class HeaderMonth extends React.Component{
    
    render(){
        let { label } = this.props;
        // let {month} = {label}.split(" ",2)
        let {num} = "1";
        
        console.log({label})
        return (
          <div className="headermonth">
          <h3 className="text-center text-white">1 <span> | { label }</span></h3>
          </div>
        )
      }
  }