import React from 'react'
import Table from 'react-bootstrap/Table'
import './index.css';

//Five day forecast table component
class FiveDayTemp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const data = JSON.parse([this.props.forecast])
        return (
            <div className="fiveday-temp">
                <h2>3-Hourly Five Day Forecasts</h2>
                Current Location:{this.props.poslat}, {this.props.poslong}
                <br/>
                City: {this.props.city}
                <br />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Weather Conditions</th>
                            <th>Date and Time</th>
                            <th>Temperature (F)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.list.map((row, i) => {
                            const imgurl = "http://openweathermap.org/img/wn/" + row.weather[0].icon + "@2x.png"
                            const dataStr = new Date(row.dt_txt) //display data & time in locale format
                            return (
                                <tr>
                                    <td><img src={imgurl} alt={row.weather[0].main} width="50" height="50"/></td>
                                    <td> {dataStr.toLocaleString()}</td>
                                    <td>{row.main.temp}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default FiveDayTemp;