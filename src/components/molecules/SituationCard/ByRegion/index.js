import Card from "../../../atoms/Card"
import Text from "../../../atoms/Text"
import { StyledStatus } from "../../../organisms/GlobalSituationCards/ByRegion/ByRegion.styled.js"
import { CiFlag1, CiHeart, CiMedicalMask } from "react-icons/ci"

const Status = ({ title, total }) => {
    const highlight = title === 'confirmed' ? 'primary' : title === 'recovered' ? 'accent' : 'danger'

    const icon =
        title === 'confirmed' ? <CiMedicalMask color={({ theme }) => theme.colors[highlight]} fontSize='2rem' /> :
            title === 'recovered' ? <CiHeart color={({ theme }) => theme.colors[highlight]} fontSize='2rem' /> :
                title === 'death' ? <CiFlag1 color={({ theme }) => theme.colors[highlight]} fontSize='2rem' /> : null

    return (
        <StyledStatus>
            <div>
                <Text style={{ textTransform: 'capitalize' }}>{title}</Text>
                <Text $weight='600' size='md' color={highlight}>{total.toLocaleString('id-ID')}</Text>
            </div>
            {icon}
        </StyledStatus>
    )
}

const SituationByRegionCard = ({ region }) => {
    const keys = Object.keys(region.numbers)
    return (
        <Card>
            <Text as='h3' $weight='600' size='md' $align='center'>{region.name}</Text>
            {keys.map((key, idx) => (
                <Status key={idx} title={key} total={region.numbers[key]} />
            ))}
        </Card>
    )
}

export default SituationByRegionCard