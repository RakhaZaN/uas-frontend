import Table from "../../atoms/Table"
import StyledProvincesTable from "./ProvincesTable.styled"

const TBody = ({ body }) => (
    <tbody>
        {body?.map((data, idx) => (
            <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{data.kota || data.name}</td>
                <td>{data.kasus?.toLocaleString('id-ID') || data.numbers?.confirmed.toLocaleString('id-ID')}</td>
                <td>{data.sembuh?.toLocaleString('id-ID') || data.numbers?.recovered.toLocaleString('id-ID')}</td>
                <td>{data.dirawat?.toLocaleString('id-ID') || data.numbers?.treatment.toLocaleString('id-ID')}</td>
                <td>{data.meninggal?.toLocaleString('id-ID') || data.numbers?.death.toLocaleString('id-ID')}</td>
            </tr>
        ))}
    </tbody>
)

const ProvincesTable = ({ data }) => {
    return (
        <StyledProvincesTable>
            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th style={{ textAlign: 'start' }}>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Perawatan</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <TBody body={data} />
            </Table>
        </StyledProvincesTable>
    )
}

export default ProvincesTable