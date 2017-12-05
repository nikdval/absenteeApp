import React from 'react';
import moment from 'moment';

export default class HeaderMonth extends React.Component {
  constructor(props) {
    super(props);
    const toolbarDate = this.props.date;
    this.state = {
      currentdate: toolbarDate,
      month: this.dateFormater(toolbarDate, 'MMMM'),
      year: this.dateFormater(toolbarDate, 'YYYY'),
      monthNum: this.dateFormater(toolbarDate, 'M'),
      monthscount: 0 //count clicks - limit 0-12
    };
    this.goToBack = this.goToBack.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.dateFormater = this.dateFormater.bind(this);
  }
  dateFormater(date, form) {
    return moment(date).format(form);
  }
  goToBack() {
    let mDate = this.state.currentdate;
    let newDate = new Date(
      mDate.getFullYear(),
      mDate.getMonth() - 1,
      1);
    if (this.state.monthscount > 0) {
      this.props.onNavigate('prev', newDate);
      this.setState({
        currentdate: newDate,
        month: this.dateFormater(newDate, 'MMMM'),
        year: this.dateFormater(newDate, 'YYYY'),
        monthNum: this.dateFormater(newDate, 'M'),
        monthscount: this.state.monthscount - 1
      })
      document.getElementById('btn-back').click();
    }
  }
  goToNext() {
    let mDate = this.state.currentdate;;
    let newDate = new Date(
      mDate.getFullYear(),
      mDate.getMonth() + 1,
      1);
    if (this.state.monthscount < 11) {
      this.props.onNavigate('next', newDate);
      this.setState({
        currentdate: newDate,
        month: this.dateFormater(newDate, 'MMMM'),
        year: this.dateFormater(newDate, 'YYYY'),
        monthNum: this.dateFormater(newDate, 'M'),
        monthscount: this.state.monthscount + 1
      })
      document.getElementById('btn-next').click();
    }

  }
  render() {
    return (
      <div className='headermonth'>
        <button className="btn btn-back btn-nav fa fa fa-angle-left" onClick={this.goToBack} id='btn-back' ></button>
        <button className="btn btn-next btn-nav fa fa-angle-right" onClick={this.goToNext} id='btn-next' ></button>
        <div className='col-md-4 col-sm-2 monthNum'>
          <h1 className='text-center text-white'>{this.state.monthNum} </h1>
        </div>
        <div className='col-md-8 col-sm-4 monthLabel'>
          <p className='text-right text-white'>  {this.state.month}</p>
          <h2 className='text-right text-white'>  {this.state.year}</h2>
        </div>
      </div>
    )
  }

}