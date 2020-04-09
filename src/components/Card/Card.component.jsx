import React, { Fragment } from 'react';
import axios from 'axios';

// Import regenerator runtime; 
// import regeneratorRuntime from "regenerator-runtime";

// Import Styled Components
import {
    CardWrapper,
    Card_Grid
} from './Card.styles';




const Card = (props) => {
    console.log(props)
    // we can also import Google Maps React - this card could be the map that renders the API data. 

    return (
        <CardWrapper data={props.data}>
            <div>
                {props.data
                    .filter((station, idx) => idx < 3)
                    .map((station) => (
                        <Card_Grid>
                        </Card_Grid>
                    ))}
            </div>
        </CardWrapper>
    );
}

export default Card;
