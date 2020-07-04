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
        </div>
    );
   }
}

export default CurrentTemp;