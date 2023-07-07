import Table from "../../atoms/Table"
import StyledProvincesTable from "./ProvincesTable.styled"

const TBody = ({ body }) => (
    <tbody>
        {body?.map((data, idx) => (
            <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{data.name}</td>
                <td>{data.numbers.confirmed.toLocaleString('id-ID')}</td>
                <td>{data.numbers.recovered.toLocaleString('id-ID')}</td>
                <td>{data.numbers.treatment.toLocaleString('id-ID')}</td>
                <td>{data.numbers.death.toLocaleString('id-ID')}</td>
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