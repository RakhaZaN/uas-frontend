import Text from "../../atoms/Text"
import Heading from "../../molecules/Heading"
import StyledSituationCards, { Cards } from "./SituationCards.styled"
import Container from "../../atoms/Container"
import SituationCard from "../../molecules/SituationCard"

const SituationCards = ({ title, data, last_update }) => {
    return <StyledSituationCards>
        <Container display='flex-stretch-center' direction='column'>
            <Heading title={`${title} Situation`} subtitle={`Data Covid Berdasarkan ${title}`} $align='center' />
            <Cards>
                {data?.map((global, idx) => (
                    <SituationCard key={idx} title={global.status} total={global.total} />
                ))}
            </Cards>
            <Text size='xs' $align='center' color='grey' style={{ marginTop: '2em' }}>Last Updated at {last_update}</Text>
        </Container>
    </StyledSituationCards>
}

export default SituationCards