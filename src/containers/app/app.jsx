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
            stations: {
                station_name: '',
                total_docks: '',
                id: '',
                docks_in_service: '',
                status: '',
                latitude: '',
                longitude: '',
                location: {
                    type: '',
                    coordinates: []
                }
            },
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
            stations: {},
            error: false
        })
    }

    getStations = async () => {
        const zip_code = this.state.search_input;
        const API_URL = 'https://data.cityofchicago.org/resource/aavc-b2wj.json';

        this.setState({ search_input: '', stations: {}, loading: true, error: false })

        try {
            const response = await axios.get(API_URL);
            const stationData = response.data;
            console.log(response);

            // set state conditionally
            if (stationData.status === 200) {
                this.setState({ stations: stationData, loading: false, error: false })
            } else {
                return <Preview />;
            }
        } catch (error) {
            this.setState({ error: true, loading: false })
        }

    }


    render() {
        return (
            <AppWrapper>
                <Header />
                <SearchBar search={this.searchBarHandler} />
                <Card />
            </AppWrapper>

        );
    }
}

export default App;
