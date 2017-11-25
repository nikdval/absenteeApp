import React from 'react';
import Calendar from './calendar/Calendar';


export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="row">

          <Calendar />

        </div>

      </div>
    );
  }
}
