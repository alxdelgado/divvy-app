import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

// Import regenerator runtime; 
// import regeneratorRuntime from "regenerator-runtime";

// Import Styled Components
import {
    CardWrapper,
    Card_Grid
} from './Card.styles';


function Card(props) {

    return (
        <CardWrapper>
            {props.station_name}
        </CardWrapper>
    )
};

export default Card;
