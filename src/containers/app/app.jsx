import React, { Fragment } from 'react';

import axios from 'axios';

// Import regenerator runtime; 
import regeneratorRuntime from "regenerator-runtime";

// Import Styled Components
import {
    AppWrapper
} from './app.styles';


// Import Components
import Header from '../../components/Header/Header.component';
import Card from '../../components/Card/Card.component';
import SearchBar from '../../components/SearchBar/SearchBar.component';


class App extends React.Component {
    constructor(props) {
        super(props);

        // define state
        this.state = {
            search_input: '',
            stations: [],
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        // this is where we will call our axios fetch
        this.getStations();
    }

    // Update state with current search bar input
    searchBarHandler = (e) => {
        this.setState({
            search_input: '',
            stations: [],
            error: false
        })
    }

    getStations = async () => {
        const search = this.state.search_input;
        const API_URL = 'https://data.cityofchicago.org/resource/aavc-b2wj.json';

        this.setState({ stations: [], loading: true, error: false })

        try {
            const response = await axios.get(API_URL);
            const stationData = response.data;
            console.log(response);
            console.log(stationData);

            // set state 
            this.setState({ stations: stationData, loading: false, error: false })
        } catch (error) {
            this.setState({ error: true, loading: false })
        }

    }


    render() {
        console.log(this.state.stations);
        return (
            <AppWrapper>
                <Header />
                <SearchBar userSubmit={this.getStations} />
                <Card data={this.state.stations} />
            </AppWrapper>

        );
    }
}

export default App;
