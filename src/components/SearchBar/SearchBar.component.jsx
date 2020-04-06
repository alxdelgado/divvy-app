import React from 'react';

// Import Elements
import InputField from '../../elements/Input-Field/InputField.component';
import Arrow from '../../elements/Arrow/Arrow.component';
// Import Styled Components
import {
    SearchBarWrapper
} from './SearchBar.styles';

const SearchBar = (props) => {

    return (
        <SearchBarWrapper>
            <InputField onInput={() => this.props.searchBarHandler(e)} />
            <Arrow />
        </SearchBarWrapper>

    );
}

export default SearchBar;

