import React, { Fragment } from 'react';

import axios from 'axios';

// Import Styled Components
import {
    AppWrapper
} from './app.styles';


// Import Components
import Header from '../../components/Header/Header.component';
import Card from '../../components/Card/Card.component';
import SearchBar from '../../components/SearchBar/SearchBar.component';


class App extends React.Component {


    // define our state
    state = {
        search_input: '',
        stations: [],
    }

    render() {
        return (
            <AppWrapper>
                <Header />
                <SearchBar />
            </AppWrapper>

        );
    }
}

export default App;
