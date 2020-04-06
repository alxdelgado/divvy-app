import React from 'react';

// Import Images
import DIVVY_LOGO from '../../assets/img/Divvy-Header-Logo.svg';

// Import Styled Components
import {
    HeaderWrapper,
    Divvy_Logo
} from './Header.styles';

const Header = () => {
    return (
        <HeaderWrapper>
            <Divvy_Logo src={DIVVY_LOGO} alt='divvy logo' />
        </HeaderWrapper>
    )
}

export default Header; 
