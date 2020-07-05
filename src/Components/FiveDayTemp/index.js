import React from 'react'
import Table from 'react-bootstrap/Table'

class FiveDayTemp extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
        };
    }

    getRowsData = function () {
        console.log("Hello");
        //var items = JSON.parse(this.props.forecast);
        //var keys = this.getKeys();
        //console.log(items);
        // return items.map((row, index)=>{
        // return <tr key={index}><Table key={index} data={row} keys={keys}/></tr>
        // })
    }

    render() {
        //const data = [{ "name": "test1" }, { "name": "test2" }];
        const data = JSON.parse([this.props.forecast])
        // console.log(JSON.parse([this.props.forecast]));
        data.list.map((d) => console.log(d.main.temp + "," + d.dt_txt + "," + d.weather[0].icon));
        //const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
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
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default FiveDayTemp;