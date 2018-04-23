import React, { Component, Fragment } from "react";

import Event from "./components/Event";
import EventList from "./components/EventList";
import Background from "./components/Background";
import LoginContainer from "./components/login/LoginContainer";

export default class App extends Component {
  RELOAD_TIME = 5 * 60 * 1000;
  // Client ID and API key from the Developer Console
  CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  API_KEY = process.env.REACT_APP_API_KEY;

  // Array of API discovery doc URLs for APIs used by the quickstart
  DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ];

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      logged: false
    };
  }

  loadGAPI() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";

    script.onload = () => {
      window.gapi.load("client:auth2", this.initClient);
    };

    document.body.appendChild(script);
  }

  componentDidMount() {
    this.loadGAPI();
    setInterval(() => {
      this.listUpcomingEvents();
    }, this.RELOAD_TIME);
  }

  initClient = async () => {
    await window.gapi.client.init({
      apiKey: this.API_KEY,
      clientId: this.CLIENT_ID,
      discoveryDocs: this.DISCOVERY_DOCS,
      scope: this.SCOPES
    });

    // Listen for sign-in state changes.
    window.gapi.auth2
      .getAuthInstance()
      .isSignedIn.listen(this.updateSigninStatus);

    // Handle the initial sign-in state.
    this.updateSigninStatus(
      window.gapi.auth2.getAuthInstance().isSignedIn.get()
    );
  };

  login = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  updateSigninStatus = isSignedIn => {
    if (isSignedIn) {
      this.setState({
        logged: true
      });
      this.listUpcomingEvents();
    } else {
      this.setState({
        logged: false
      });
    }
  };

  listUpcomingEvents = async () => {
    const response = await window.gapi.client.calendar.events.list({
      calendarId: process.env.REACT_APP_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime"
    });

    this.setState({
      events: response.result.items
    });
  };

  render() {
    return (
      <Fragment>
        <Background />

        {!this.state.logged && (
          <LoginContainer>
            <button onClick={this.login}> Login</button>
          </LoginContainer>
        )}
        {this.state.logged && (
          <EventList>
            <h2>Eventit @Helsinki</h2>

            {this.state.events.map(ev => <Event key={ev.id} event={ev} />)}
          </EventList>
        )}
      </Fragment>
    );
  }
}
