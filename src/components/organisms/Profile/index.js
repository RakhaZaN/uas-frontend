import Container, { Side } from "../../atoms/Container"
import StyledProfile from "./Profile.styles"
import photo from '../../../assets/myphoto.jpg';
import Text from "../../atoms/Text";
import Card from "../../atoms/Card";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Kesan = () => (
    <Card>
        <Text $weight='600' size='xs'>Kesan & Pesan</Text>
        <Text $align='justify' style={{ marginTop: '2rem' }}>
            Pembelajaran Matakuliah Frontend sangat seru tidak membosankan, penyampaian materi sangat mudah dipahami. Terimakasih atas ilmu yang telah diberikan selama satu semester ini. Doa terbaik untuk kakak-kakak sekalian. <br /><br />
            Dosen dan Asdosnya Keren-Keren <Text as='span' color='grey'>bismillah nilai A+++</Text>
        </Text>
    </Card>
)

const Profile = () => {
    return (
        <StyledProfile>
            <Container display='flex-center-between'>
                <Side $shrinkMd='1' $basisMd='40%'>
                    <img src={photo} alt="Profile Rakha Zahran Nurfirmansyah" />
                </Side>
                <Side $shrinkMd='1' $basisMd='40%'>
                    <Text size='2xl' color="accent">UAS Frontend</Text>
                    <Text style={{ marginTop: '3rem' }}>Dibuat Oleh:</Text>
                    <Text size='lg' color="primary" $weight='600'>Rakha Zahran Nurfirmansyah</Text>
                    <Text>0110221254 - TI11 - Kelas Jumat</Text>

                    <Text $weight='600' style={{ marginTop: '2rem' }}>Let's Connect:</Text>
                    <div className="sosmed">
                        <a href="https://www.instagram.com/rakha_zan/"><FaInstagram /> Instagram</a>
                        <a href="https://www.linkedin.com/in/rakha-zahran-nurfirmansyah/"><FaLinkedin /> Linked In</a>
                    </div>
                </Side>
            </Container>
            <Container>
                <Kesan />
            </Container>
        </StyledProfile>
    )
}

export default Profile