import React from 'react'
import Table from 'react-bootstrap/Table'

class FiveDayTemp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="fiveday-temp">
                <h2>3-Hourly Five Day Forecasts</h2>
                Current Location:{this.props.poslat}, {this.props.poslong}
                <br />
                {/* Forecasts: {this.props.forecast} */}
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Date and Time</th>
                            <th>Temperature (F)</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default FiveDayTemp;