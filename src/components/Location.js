import React from 'react';

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
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

function Location(props){
  return (
    <div id="locationDiv">
      <h3>The day is: {marketSchedule[props.dayOfWeek].day}</h3>
      <h3>Location for today: {marketSchedule[props.dayOfWeek].location}</h3>
      <h4>Time: {marketSchedule[props.dayOfWeek].hours}</h4>
      <h4>Booth number: {marketSchedule[props.dayOfWeek].booth}</h4>
    </div>
  )
}

export default Location;