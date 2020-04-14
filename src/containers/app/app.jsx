import React, { useState, useEffect } from 'react';

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


function App() {

    // init state for our stations data; 
    const [stations, setStations] = useState(null);

    // init state for our Search function; 
    const [search, setSearch] = useState('');

    // init state for our error handling; 
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const API_URL = 'https://data.cityofchicago.org/resource/aavc-b2wj.json';
            try {
                const response = await axios.get(API_URL);
                setStations(response);
            } catch (error) {
                setError(true);
            }
        }
        fetchData();
    }, []);

    console.log(stations)

    return (
        <AppWrapper>
            <Header />
            <SearchBar />
            <Card />
        </AppWrapper>

    );
}

export default App;
