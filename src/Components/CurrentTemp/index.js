import React from 'react'

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
            {this.props.poslat}, {this.props.poslong}
        </div>
    );
   }
}

export default CurrentTemp;