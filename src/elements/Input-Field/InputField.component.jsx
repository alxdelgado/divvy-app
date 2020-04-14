import React from 'react';

// Import Styled Components
import {
    InputFieldWrapper,
    InputArea
} from './InputField.styles';

const InputField = (props) => {
    return (
        <InputFieldWrapper>
            <InputArea
                id={props.id}
                name={props.station_name}
                placeholder='Search'
                onChange={props.searchBarHandler}
            />
        </InputFieldWrapper>
    )
}

export default InputField; 