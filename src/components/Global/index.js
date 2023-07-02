import Statistics from "./Statistics"
import styles from "./styles.module.css"

const Global = () => (
    <>
        <section id='global' className={styles.global}>
            <div className={`container`}>
                <h1 className='title'>Indonesia</h1>
                <p className='subtitle'>Data Covid Berdasarkan Global</p>
                {/* Statistics */}
                <Statistics />
            </div>
        </section>
    </>
)

export default Global