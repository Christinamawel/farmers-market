import React from "react";
import PropTypes from "prop-types";

const marketSchedule = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
    day: "Friday",
    location: "",
    hours: "",
    booth: ""
  },
  {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  },
  {  
    day: "empty day",
    location: "",
    hours: "",
    booth: ""
  }
];

function Day(props) {
  return (
    <div id="day-div">
      <h3>{marketSchedule[props.weekday].day}</h3>
      <h4>{marketSchedule[props.weekday].location}</h4>
      <h4>{marketSchedule[props.weekday].hours} {marketSchedule[props.weekday].booth}</h4>
    </div>
  )
}

Day.propTypes = {
  weekday: PropTypes.number
}

export default Day;