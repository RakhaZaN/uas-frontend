import Container from "../../atoms/Container"
import Heading from "../../molecules/Heading"
import ProvincesTable from "../../molecules/ProvincesTable"
import StyledProvinces from "./Provinces.styled"

const Provinces = ({ data }) => {
    return (
        <StyledProvinces>
            <Container display='flex-stretch-center' direction='column'>
                <Heading title='Situation by Provinces' subtitle='Data Covid Berdasarkan Provinsi' $align='center' />
                <ProvincesTable data={data} />
            </Container>
        </StyledProvinces>
    )
}

export default Provinces