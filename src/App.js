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
 * https://react-bootstrap.github.io/components/table/#table-small
 * https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app
 * https://openweathermap.org/weather-conditions
 * https://spectrum.chat/react-table/general/text-align-columns~37d53ebb-5c51-433e-a8f1-028527cb0d33
 * 
 */
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      poslat: null,//latitude
      poslong: null,//longitude
      city: null, //city name location
      weatherData: null, //weather data
      forecast: null //5 day forecast data as json string
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
        //  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=` + position.coords.latitude + `&lon=` + position.coords.longitude + `&appid=` + process.env.REACT_APP_WEATHER_API_KEY)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=` + position.coords.latitude + `&lon=` + position.coords.longitude + `&appid=` + process.env.REACT_APP_WEATHER_API_KEY)
          .then(res => {
            const data = res.data;
            that.setState({ weatherData: data.main.temp, city: data.name })
          })
        //Get 5 day forecast
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=` + position.coords.latitude + `&lon=` + position.coords.longitude + `&appid=` + process.env.REACT_APP_WEATHER_API_KEY)
          .then(res => {
            const data = res.data;
            that.setState({ forecast: JSON.stringify(data) })
            // console.log(data);
          })
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }

  componentDidUpdate() {
  }

  render() {
    //const data =JSON.parse(this.state.forecast);
    //const data =this.state.forecast;
    // console.log(this.state.forecast)
    return (
      <div className="App">
        <Tabs>
          <Tab label="Current Temperature">
            <CurrentTemp poslat={this.state.poslat} poslong={this.state.poslong} weatherData={this.state.weatherData}  city={this.state.city}/>
          </Tab>
          <Tab label="3-Hourly Five Day Forecasts">
            <FiveDayTemp poslat={this.state.poslat} poslong={this.state.poslong} forecast={this.state.forecast} city={this.state.city}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;