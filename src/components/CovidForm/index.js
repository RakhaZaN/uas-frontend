import React, { useState } from 'react'
import styles from './styles.module.css'
import concept from '../../assets/conceptual-idea.svg'

const CovidForm = ({ data, setData }) => {
    const provinces = data.provinces;
    const statusList = Object.keys(provinces[0])

    const [inputs, setInputs] = useState({
        provincy: '',
        status: '',
        sum: 0,
    })

    const [errors, setErrors] = useState({
        erProvincy: false,
        erStatus: false,
        erSum: false,
    })

    const handleChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value })

    const validation = () => {
        setErrors(prevErrors => ({
            ...prevErrors,
            erProvincy: inputs.provincy === '',
            erStatus: inputs.status === '',
            erSum: inputs.sum <= 0
        }))
        return inputs.provincy !== '' && inputs.status !== '' && inputs.sum > 0
    }

    const updateProvincy = () => {
        const currentDate = new Date().toJSON().slice(0, 10);
        const update = provinces.map(prov => {
            if (prov.kota === inputs.provincy) {
                prov[inputs.status] += Number(inputs.sum)
            }
            return prov
        })

        setData({ ...data, provinces: update, last_update: currentDate });
    }

    const resetInputs = () => setInputs({
        ...inputs,
        provincy: '',
        status: '',
        sum: 0,
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validation()) {
            updateProvincy();
            resetInputs();
        }

    }

    return (
        <>
            <section id="covid-form" className={styles.covidForm}>
                <div className={`container ${styles.container}`}>
                    {/* Ilustration */}
                    <div className={styles.covidForm__ilustration}>
                        <img src={concept} alt="Medical Care Ilustration" />
                    </div>
                    {/* Form */}
                    <form className={styles.covidForm__form} onSubmit={handleSubmit}>
                        <h1 className={`title`}>Form Covid</h1>
                        <div className={styles.covidForm__input_group}>
                            <label className={styles.covidForm__label}>Provinsi</label>
                            <select name='provincy' className={styles.covidForm__input} value={inputs.provincy} onChange={handleChange}>
                                <option value=''>--- Please Select ---</option>
                                {provinces.map(prov => (
                                    <option key={prov.kota} value={prov.kota}>{prov.kota}</option>
                                ))}
                            </select>
                            {errors.erProvincy && (<p className={styles.covidForm__error}>Pilih provinsi yang tersedia</p>)}
                        </div>
                        <div className={styles.covidForm__input_group}>
                            <label className={styles.covidForm__label}>Status</label>
                            <select name='status' className={styles.covidForm__input} value={inputs.status} onChange={handleChange}>
                                <option value=''>--- Please Select ---</option>
                                {statusList.map(stat => {
                                    return stat !== 'kota' && (<option key={stat} value={stat}>{stat}</option>)
                                })}
                            </select>
                            {errors.erStatus && (<p className={styles.covidForm__error}>Pilih status yang tersedia</p>)}
                        </div>
                        <div className={styles.covidForm__input_group}>
                            <label className={styles.covidForm__label}>Jumlah</label>
                            <input type="number" name='sum' className={styles.covidForm__input} onChange={handleChange} value={inputs.sum} />
                            {errors.erSum && (<p className={styles.covidForm__error}>Jumlah harus lebih dari 0!</p>)}
                        </div>

                        <button className={styles.covidForm__submitBtn}>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CovidForm