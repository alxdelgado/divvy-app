import React from 'react';
import axios from 'axios';

// Import regenerator runtime; 
import regeneratorRuntime from "regenerator-runtime";



// Import Styled Components
import {
    CardWrapper,
    Card_Grid
} from './Card.styles';



class Card extends React.Component {

    state = {
        stations: [],
    }

    componentDidMount() {
        this.getStations();
    }

    getStations = async () => {
        const API_URL = 'https://data.cityofchicago.org/resource/aavc-b2wj.json';
        const URL = API_URL

        this.setState({ loading: true, error: false });

        try {
            const response = await axios.get(URL)
            const stationData = response.data;
            console.log(response);

            this.setState({
                stations: stationData
            })
        } catch (error) {
            this.setState({ error: true, loading: false })
        }
    }



    render() {
        console.log(this.state.stations);
        return (
            <CardWrapper>
                {this.state.stations.map((station_info, index) => {
                    return <Card_Grid
                        key={station_info.id}
                        name={station_info.station_name}
                        status={station_info.status}
                        docks={station_info.docks_in_service}
                        location={station_info.location}
                        address={station_info.location_adress}
                        city={station_info.location_city}
                        state={station_info.location_state}
                        zip={station_info.location_zip}
                    >
                        <h1>{name}</h1>
                    </Card_Grid>
                })}
            </CardWrapper>
        )
    }
}

export default Card;