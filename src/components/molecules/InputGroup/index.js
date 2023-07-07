import React from 'react'
import StyledInputGroup from './InputGroup.styled'
import Text from '../../atoms/Text'
import Input from '../../atoms/Input'

const InputGroup = ({ inputs, setInputs, errors, pesanError, label, name, inputAs, ...inputAttribute }) => {
    const handleChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value })

    return (
        <StyledInputGroup>
            <Text as='label' htmlFor={name} $weight='500' size='sm'>{label}</Text>
            <Input as={inputAs} name={name} id={name} onChange={handleChange} {...inputAttribute} />
            {errors[name] && (<Text size='sm' color='danger'>{pesanError}</Text>)}
        </StyledInputGroup>
    )
}

export default InputGroup