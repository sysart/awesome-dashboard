import React from "react";
import moment from 'moment'
import styled from "styled-components";

const Event = styled.div`
  color: white;
  font-size: 50px;
  font-weight: ${props => props.today ? 'bold': 'normal'}
  text-decoration: ${props => props.today ? 'underline': 'none'}
`

export default ({event}) => {
  const date = event.start.dateTime ? moment(event.start.dateTime).format("DD.MM") : moment(event.start.date).format("DD.MM");

  let time = "";

  if(event.start.dateTime){
    const start =  event.start.dateTime  ? moment(event.start.dateTime).format("HH:mm") : '';
    const end =  event.start.dateTime  ? moment(event.end.dateTime).format("HH:mm") : '';
    time = `klo ${start}-${end}`
  }


  const today = moment().format("DD.MM") === date;

  return (

      <Event today={today}>
        { `${date} ${time}`}{" "}
        {event.summary}
      </Event>

  )
}