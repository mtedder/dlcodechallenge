import React from 'react';
import './App.css';
import CurrentTemp from './Components/CurrentTemp';

/**
 * Refs:
 * https://youtu.be/WUDoU8u7lOo
 * https://nodejs.org/en/download/
 * https://create-react-app.dev/docs/getting-started
 * https://reactjs.org/tutorial/tutorial.html
 * https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
 */
class App extends React.Component {


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <CurrentTemp />
      </div>
    );
  }
}

export default App;
