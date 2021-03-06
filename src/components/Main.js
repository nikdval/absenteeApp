import React from 'react';
import Calendar from './calendar/Calendar';
import events from '../data/testData';
import AddModal from './forms/AddModal';


const day = new Date();
const year = day.getFullYear();
let tempMonth = day.getMonth();

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      absences: [],
      month: day.getMonth(),
      isOpen: false,
      triggerData: '',
      rawData: [],
      holidays: [],
    };
    this.dataConstructor = this.dataConstructor.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onSelectDay = this.onSelectDay.bind(this);
    this.updateAbsence = this.updateAbsence.bind(this);
    this.getHolydaysFromApiAsync = this.getHolydaysFromApiAsync.bind(this);
  }
  componentDidMount() {
    /**
 * Entrty point of data
 * Currently from JS object
 * Parse data thought HTTP, RSS, websocket or any other alternative
 */
    /**
     * For different departments the d1 will be replaced by the filtering selection
     * Depending how many projects the differenciation could be by ID
     */
    const members = events[0].d1;
    const projects = events[0].projectA;
    const merged = members.concat(projects);
    /*Fetch all data*/
    this.getHolydaysFromApiAsync(merged);
  }
  /*API Callback */
  getHolydaysFromApiAsync(events) {
    /*public Holidays from Google API*/
    var key = 'AIzaSyB2V8uPTufJu0ymaRw88u8CftfLo8T9XgA';
    var country = 'uk';
    var calendarUrl = 'https://www.googleapis.com/calendar/v3/calendars/en.' + country
      + '%23holiday%40group.v.calendar.google.com/events?key=' + key;
    return fetch(calendarUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        let results = responseJson.items
        let holidays = results.map(function (element, index) {
          let holyObj = {
            'name': element.summary,
            'title': 'Public Holiday',
            'start': element.start.date,
            'end': element.start.date,
            'unit': ''
          }
          return holyObj;
        })
        /*Combine all data and push them to this.state => Calendar*/
        const totalEvents = holidays.concat(events);
        const resultCalendar = this.dataConstructor(totalEvents, this.state.user);
        this.componentWillReceiveProps(resultCalendar, events, holidays, this.state.month);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  /* Data constructor for the Calendar*/
  dataConstructor(data, user) {
    const current = user.name;
    let holder = data.map(function (element, index) {
      let unit = (element.unit == 'AM' ? 'Morning' : element.unit == 'PM' ? 'Afternoon' : 'All day');
      let text = (element.title == 'Report' ? (' - Due by ' + unit) : element.title == 'Public Holiday' ? '- Public Holiday ' : (': Absent ' + unit));
      /*fix end date error*/
      let day = new Date(element.end);
      let nextday = day.setDate(day.getDate()) + 1;
      let e = {
        'title': (current == element.name ? element.title : element.name) + text,
        'start': new Date(element.start),
        'end': new Date(nextday),
        'user': (current == element.name ? true : false),
        'holiday': (element.title == 'Public Holiday' ? true : false),
        'project': (element.title == 'Report' ? true : false)
      };
      return e;
    });
    return holder;
  }

  componentWillReceiveProps(data, raw, holidays, month) {
    this.setState({
      absences: data,
      rawData: raw,
      holidays: holidays,
      month: month
    });
  }

  render() {
    return (
      <div className='main .container-fluid'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='calendar-wrapper col-md-10 col-sm-11 text-center'>
            <Calendar classHide={''}
              month={new Date(year, this.state.month, 1)}
              absence={this.state.absences}
              trigger={this.onSelectDay}
              holidays={this.state.holidays}
            />
            <Calendar classHide={'hide-mobile'}
              month={new Date(year, this.state.month + 1, 1)}
              absence={this.state.absences}
              trigger={this.onSelectDay}
              holidays={this.state.holidays}
            />
          </div>
        </div>
        <div className='col-md-1'></div>
        <div className='row'>
          <button className='invisible' id='openModal' data-toggle='modal' data-target='#myModal' onClick={this.toggleModal}>Open Modal</button>
          <AddModal
            show={this.toggleModal}
            onClose={this.toggleModal}
            date={this.state.triggerData}
            update={this.updateAbsence}
            leftDays={this.state.user.leftDays}
            holidays={this.state.holidays}
            members={this.state.rawData} />
        </div>
      </div>
    );
  }


  /*AddForm */
  onSelectDay(selectDay) {
    this.setState({
      triggerData: selectDay
    });
    document.getElementById('openModal').click();
  }
  /*Data from the Form */
  updateAbsence(newData) {
    let unit = (newData.unit == 'AM' ? 'Morning' : newData.unit == 'PM' ? 'Afternoon' : 'All day');
    /*fix end date error*/
    let day = new Date(newData.end);
    let nextday = day.setDate(day.getDate() + 1);

    const newEvent = {
      'title': newData.title + ':Absent ' + unit,
      'start': new Date(newData.start),
      'end': new Date(nextday),
      'user': true,
      'holiday': false,
      'project': false
    }

    const newabsence = this.state.absences;
    newabsence.push(newEvent);
    this.setState({
      absences: newabsence
    })

  }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}
