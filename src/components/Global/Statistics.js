import data from "../../utils/constants/indonesia.js"
import DataCard from "./DataCard"
import styles from './styles.module.css';

const Statistics = () => (
    <>
        <div className={styles.global__statistics}>
            {data.indonesia.map(dt => (
                <DataCard key={dt.status} {...dt} />
            ))}
        </div>
        <p className={styles.global__last_update}>Last update at {data.last_update}</p>
    </>
)

export default Statistics