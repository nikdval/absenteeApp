import React from 'react';

import CalendarDate from './date';

export default class Month extends React.Component {
  render() {
    return (
      <section className="sd-month">
        <ul className="sd-days"> 
          <li className="sd-day">Mon</li>
          <li className="sd-day">Tue</li>
          <li className="sd-day">Wed</li>
          <li className="sd-day">Thu</li>
          <li className="sd-day">Fri</li>
          <li className="sd-weekend">Sat</li>
          <li className="sd-weekend">Sun</li>
        </ul>

        {this.props.dates.map((date) => (<CalendarDate date={date} {...this.props} />))}
      </section>
    )
  }
}