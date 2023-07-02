import styles from './styles.module.css'

const Header = ({ head }) => (
    <thead>
        <tr>
            <th>No.</th>
            {head.map(header => (
                <th key={header}>{header}</th>
            ))}
        </tr>
    </thead>
)

const Body = ({ body }) => (
    <tbody>
        {body.map((provincy, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{provincy.kota}</td>
                <td>{provincy.kasus}</td>
                <td>{provincy.sembuh}</td>
                <td>{provincy.meninggal}</td>
                <td>{provincy.dirawat}</td>
            </tr>
        ))}
    </tbody>
)

const Table = ({ data }) => (
    <>
        <div className={styles.table_container}>
            <table className={styles.provincy__table}>
                <Header head={Object.keys(data.provinces[0])} />
                <Body body={data.provinces} />
            </table>
        </div>
        <ul className={styles.provincy__info}>
            <li className={styles.provincy__info_item}>Last Update at <span>{data.last_update}</span></li>
            <li className={styles.provincy__info_item}>Total <span>{data.total_province}</span> Provinces</li>
        </ul>
    </>
)

export default Table