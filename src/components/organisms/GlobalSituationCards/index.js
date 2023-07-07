import Text from "../../atoms/Text"
import Heading from "../../molecules/Heading"
import StyledGlobalSituationCards, { Cards } from "./GlobalSituationCards.styled"
import Container from "../../atoms/Container"
import SituationCard from "../../molecules/SituationCard"

const GlobalSituationCards = ({ data, last_update }) => {
    return <StyledGlobalSituationCards>
        <Container display='flex-center-center' direction='column'>
            <Heading title='Global Situation' subtitle='Data Covid Berdasarkan Global' $align='center' />
            <Cards>
                {data?.map((global, idx) => (
                    <SituationCard key={idx} title={global.status} count={global.total} />
                ))}
            </Cards>
            <Text size='xs' $align='center' color='grey' style={{ marginTop: '2em' }}>Last Updated at {last_update}</Text>
        </Container>
    </StyledGlobalSituationCards>
}

export default GlobalSituationCards