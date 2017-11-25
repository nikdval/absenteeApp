import React from 'react';
import moment from 'moment';

export default class HeaderMonth extends React.Component{
    
    render(){
        const { label } = this.props
        const {num} = moment().date(this.props).format("M");
        console.log({num})
        return (
          <div>
            <h3>{num} | { label }</h3>
          </div>
        )
      }
  }