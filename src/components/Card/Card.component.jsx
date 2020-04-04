import React from 'react';
import axios from 'axios';

// Import regenerator runtime; 
import regeneratorRuntime from "regenerator-runtime";

// Import Styled Components
import {
    CardWrapper
} from './Card.styles';



class Card extends React.Component {

    state = {
        stations: [],
        station_name: '',

    }

    componentDidMount() {
        this.getStations();
    }

    // Update state with current search bar input
    searchBarHandler = (e) => {
        this.setState({
            station_name: e.target.value
        })
    };

    getStations = async () => {
        const stationName = this.state.searchBarInput;
        const API_URL = 'https://data.cityofchicago.org/resource/aavc-b2wj.json';
        const URL = API_URL

        this.setState({ loading: true, error: false });

        try {
            const response = await axios.get(URL)
            const stationData = response.data;
            console.log(response);

            this.setState({
                stations: stationData,
                station_name: e.target.value
            })
        } catch (error) {
            this.setState({ error: true, loading: false })
        }
    }



    render() {
        console.log(this.state.stations);
        return (
            <CardWrapper>
                <h1>SoundCloud Data</h1>
            </CardWrapper>
        )
    }
}

export default Card;