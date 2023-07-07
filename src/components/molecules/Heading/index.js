import React from 'react'
import StyledHeading from './Heading.styled'
import Text from '../../atoms/Text'

const Heading = ({ title, subtitle, $align }) => {
    return (
        <StyledHeading>
            <Text as='h1' color='primary' size='2xl' $weight='600' $align={$align}>
                {title}
            </Text>
            <Text as='h2' color='accent' size='md' $weight='400' $align={$align}>
                {subtitle}
            </Text>
        </StyledHeading>
    )
}

export default Heading