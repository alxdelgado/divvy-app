import React from 'react';

// Import Elements
import InputField from '../../elements/Input-Field/InputField.component';
import Button from '../../elements/Button/Button.component';
import Arrow from '../../elements/Arrow/Arrow.component';
// Import Styled Components
import {
    SearchBarWrapper
} from './SearchBar.styles';

const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <InputField />
            <Button />
            <Arrow />
        </SearchBarWrapper>
    )
}

export default SearchBar; 
