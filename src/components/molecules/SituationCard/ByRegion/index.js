import theme from "../../../../utils/constants/theme"
import Card from "../../../atoms/Card"
import SituationStatus from "../../../atoms/Container/SituationStatus"
import Text from "../../../atoms/Text"
import { CiFlag1, CiHeart, CiMedicalMask } from "react-icons/ci"

const Status = ({ title, total }) => {
    const highlight = title === 'confirmed' ? 'primary' : title === 'recovered' ? 'accent' : 'danger'
    const color = theme.colors[highlight]

    const icon =
        title === 'confirmed' ? <CiMedicalMask color={color} fontSize='2rem' /> :
            title === 'recovered' ? <CiHeart color={color} fontSize='2rem' /> :
                title === 'death' ? <CiFlag1 color={color} fontSize='2rem' /> : null

    return (
        <SituationStatus>
            <div>
                <Text style={{ textTransform: 'capitalize' }}>{title}</Text>
                <Text $weight='600' size='md' color={highlight}>{total.toLocaleString('id-ID')}</Text>
            </div>
            {icon}
        </SituationStatus>
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