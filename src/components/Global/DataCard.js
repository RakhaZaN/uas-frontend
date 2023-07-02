import styles from './styles.module.css'

const DataCard = ({ status, total, detail }) => (
    <div className={styles.global__card}>
        <h2 className={styles.global__card_status}>{status}</h2>
        <h3 className={styles[`global__card_text_${status.toLowerCase()}`]}>{total}</h3>
        <a href={detail}>Lihat detail</a>
    </div>
)

export default DataCard