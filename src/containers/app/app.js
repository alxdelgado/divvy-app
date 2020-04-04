import React, { Fragment } from 'react';

// Import Components
import Header from '../../components/Header/Header.component';
import Card from '../../components/Card/Card.component';
import SearchBar from '../../components/SearchBar/SearchBar.component';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SearchBar />
                <Card />
            </React.Fragment>
        )
    }
}

export default App; 
