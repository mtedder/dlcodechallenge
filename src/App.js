import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CurrentTemp from './Components/CurrentTemp';
import FiveDayTemp from './Components/FiveDayTemp';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import axios from 'axios';

/**
 * Refs:
 * https://youtu.be/WUDoU8u7lOo
 * https://nodejs.org/en/download/
 * https://create-react-app.dev/docs/getting-started
 * https://reactjs.org/tutorial/tutorial.html
 * https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
 * https://stackoverflow.com/questions/47129102/setstate-inside-promise-in-react
 * https://www.npmjs.com/package/react-bootstrap-tabs
 * https://v4-alpha.getbootstrap.com/getting-started/download/#package-managers
 * https://react-bootstrap.github.io/components/tabs/
 * https://create-react-app.dev/docs/adding-bootstrap/
 * https://alligator.io/react/axios-react/
 */
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      poslat: null,//latitude
      poslong: null,//longitude
      weatherData: null //weather data
    };
  }

  componentDidMount() {
    var that = this //resolves scope issues
    navigator.geolocation.getCurrentPosition(
      function (position) {
        that.setState({ poslat: position.coords.latitude, poslong: position.coords.longitude });
        // console.log(position);
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        //Get current temperature from weather api
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=`+ position.coords.latitude + `&lon=` + position.coords.longitude + `&appid=`)
          .then(res => {
            const data = res.data;
            that.setState({weatherData:data.main.temp})
            console.log(data);
          })
//Get 5 day forecast
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=`+ position.coords.latitude + `&lon=` + position.coords.longitude + `&appid=`)
          .then(res => {
            const data = res.data;
            //that.setState({weatherData:data.main.temp})
            console.log(data);
          })

         
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Tabs>
          <Tab label="Current Temperature">
            <CurrentTemp poslat={this.state.poslat} poslong={this.state.poslong} weatherData={this.state.weatherData}/>
          </Tab>
          <Tab label="3-Hourly Five Day Forecasts">
            <FiveDayTemp poslat={this.state.poslat} poslong={this.state.poslong} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;