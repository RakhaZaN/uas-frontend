import Card from "../../atoms/Card"
import Text from "../../atoms/Text"

const SituationCard = ({ title, count }) => {
    const highlight = title === 'confirmed' ? 'primary' : title === 'recovered' ? 'accent' : 'danger'
    return (
        <Card>
            <Text as='h3' $weight='600' size='lg' $align='center' style={{ textTransform: 'capitalize' }}>{title}</Text>
            <Text $weight='600' size='xl' color={highlight} $align='center'>{count.toLocaleString('id-ID')}</Text>
        </Card>
    )
}

export default SituationCard