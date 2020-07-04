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
            <h2>3-Hourly Forecasts</h2>
            {this.props.poslat}, {this.props.poslong}
        </div>
    );
   }
}

export default FiveDayTemp;