import React from "react";
import moment from "moment";
import styled from "styled-components";

const Event = styled.div`
  color: white;
  font-size: 50px;
  font-weight: ${props => (props.today ? "bold" : "normal")}
  text-decoration: ${props => (props.today ? "underline" : "none")}
`;

export default ({ event }) => {
  let date = event.start.dateTime
    ? moment(event.start.dateTime).format("DD.MM")
    : moment(event.start.date).format("DD.MM");

  let time = "";

  // with times
  if (event.start.dateTime && event.end.dateTime) {
    const isMultiDate =
      moment(event.start.dateTime).format("DD.MM") !==
      moment(event.end.dateTime).format("DD.MM");

    if (isMultiDate) {
      date = `${moment(event.start.dateTime).format("DD.MM HH:mm")} - ${moment(
        event.end.dateTime
      ).format("DD.MM HH:mm")}`;
    }
  } else {
    if (event.end.date) {
      date = `${date} - ${moment(event.end.date).format("DD.MM")}`;
    }

    if (event.start.dateTime) {
      const start = event.start.dateTime
        ? moment(event.start.dateTime).format("HH:mm")
        : "";
      const end = event.start.dateTime
        ? moment(event.end.dateTime).format("HH:mm")
        : "";
      time = `klo ${start}-${end}`;
    }
  }

  const today = moment().format("DD.MM") === date;

  return (
    <Event today={today}>
      {`${date} ${time}`} {event.summary}
    </Event>
  );
};
