import React from 'react'

//Current Temperature component
class CurrentTemp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
      
   render(){
    return (
        <div className="current-temp">
            <h2>Current Temperature</h2>
            <b>Current Location:</b>{this.props.poslat}, {this.props.poslong}
            <br/>
            <b>City:</b> {this.props.city}
            <br/>
            <b>Temperature:</b> {this.props.weatherData}
        </div>
    );
   }
}

export default CurrentTemp;