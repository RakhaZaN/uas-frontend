import Container from "../../../atoms/Container"
import Heading from "../../../molecules/Heading"
import SituationByRegionCard from "../../../molecules/SituationCard/ByRegion"
import StyledByRegion, { Cards } from "./ByRegion.styled"

const ByRegion = ({ data }) => {
    return (
        <StyledByRegion>
            <Container display='flex-stretch-center' direction='column'>
                <Heading title='Situation By Regions' subtitle='Bacaan Pilihan Covid' $align='center' />
                <Cards>
                    {data?.map((region, idx) => (
                        <SituationByRegionCard key={idx} region={region} />
                    ))}
                </Cards>
            </Container>
        </StyledByRegion>
    )
}

export default ByRegion