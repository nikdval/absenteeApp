import React from 'react';
import moment from 'moment';

export default class HeaderC extends React.Component {
  render() {
    return (
      <header className="sd-header">
        {/* <button className="sd-button" onClick={this.props.updateMonth.bind(this, this.props.month - 1)}>&laquo;</button> */}
          <h3 className="sd-heading">{moment().month("November").format('MMMM')} </h3>
        {/* <button className="sd-button" onClick={this.props.updateMonth.bind(this, this.props.month + 1)}>&raquo;</button> */}
      </header>
    );
  }
}