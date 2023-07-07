import { useSelector } from "react-redux"
import Container from "../../atoms/Container"
import Heading from "../../molecules/Heading"
import ProvincesTable from "../../molecules/ProvincesTable"
import StyledProvinces from "./Provinces.styled"

const Provinces = ({ title }) => {
    const covid = useSelector((state) => state.covid.covid)
    return (
        <StyledProvinces>
            <Container display='flex-stretch-center' direction='column'>
                <Heading title={title} subtitle='Data Covid Berdasarkan Provinsi' $align='center' />
                <ProvincesTable data={covid.provinces || covid.regions} />
            </Container>
        </StyledProvinces>
    )
}

export default Provinces