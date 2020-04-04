import React from 'react';

// Import Styled Components
import {
    InputFieldWrapper,
    InputArea
} from './InputField.styles';

const InputField = (props) => {
    return (
        <InputFieldWrapper>
            <label htmlFor={props.name}>{props.label}</label>
            <InputArea
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
            />
        </InputFieldWrapper>
    )
}

export default InputField; 