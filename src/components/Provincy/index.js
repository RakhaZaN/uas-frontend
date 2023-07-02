import styles from './styles.module.css'
import Table from './Table'

const Provincy = ({ data }) => {
    return (
        <>
            <section id='provincy'>
                <div className={`container ${styles.provincy}`}>
                    <h1 className={`title`}>Provinsi</h1>
                    <p className={`subtitle`}>Data Covid berdasarkan provinsi</p>
                    <Table data={data} />
                </div>
            </section>
        </>
    )
}

export default Provincy