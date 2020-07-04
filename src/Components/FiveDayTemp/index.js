import React from 'react'

class FiveDayTemp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
      
   render(){
    return (
        <div className="fiveday-temp">
            <h2>3-Hourly Five Day Forecasts</h2>
            Current Location:{this.props.poslat}, {this.props.poslong}
            <br/>
            Forecasts: {this.props.forecast}
        </div>
    );
   }
}

export default FiveDayTemp;