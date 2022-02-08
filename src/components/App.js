import React from 'react';
import Location from './Location';
import Season from './Season';

let dateToday = new Date(Date.now());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: dateToday,
      month: dateToday.getUTCMonth(),
      year: dateToday.getFullYear()
    };
  }

  nextClick = () => {
    if(this.state.month === 11) {
      this.setState(prevState => ({
        month: 0,
        year: prevState.year +1
      }));
    }
    else {
      this.setState(prevState => ({
        month: prevState.month +1
      }));
    }
  }

  backClick = () => {
    if(this.state.month === 0) {
      this.setState(prevState => ({
        month: 11,
        year: prevState.year -1
      }));
    }
    else {
      this.setState(prevState => ({
        month: prevState.month -1
      }));
    }
  }

  render(){
    let DayOfWeek = this.state.date.getDay();
    let Month = this.state.month;
    let Year = this.state.year;

    return (
      <React.Fragment>
        <h1>Avery's Organics</h1>
        <Location dayOfWeek={DayOfWeek}/>
        <Season month={Month} year={Year}/>
        <button onClick={this.backClick}>back</button>
        <button onClick={this.nextClick}>next</button>
      </React.Fragment>
    );
  }
}

export default App;