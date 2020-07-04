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
 * https://stackoverflow.com/questions/47129102/setstate-inside-promise-in-react
 */
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      poslat: null,//latitude
      poslong: null,//longitude
    };
  }

  componentDidMount() {
    var that = this //resolves scope issues
    navigator.geolocation.getCurrentPosition(
      function (position) {
        that.setState({ poslat: position.coords.latitude, poslong: position.coords.longitude});
        // console.log(position);
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
        <CurrentTemp poslat={this.state.poslat} poslong={this.state.poslong} />
      </div>
    );
  }
}

export default App;
