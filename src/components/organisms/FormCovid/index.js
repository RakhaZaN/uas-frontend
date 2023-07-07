import { useDispatch, useSelector } from 'react-redux'
import concept from '../../../assets/conceptual-idea.svg'
import Button from '../../atoms/Button'
import Container, { Side } from "../../atoms/Container"
import Form from '../../atoms/Form'
import Heading from '../../molecules/Heading'
import InputGroup from '../../molecules/InputGroup'
import StyledFormCovid from "./FormCovid.styled"
import { useState } from 'react'
import { updateCovid } from '../../../feature/covidSlice'

const FormCovid = () => {
    const covid = useSelector((state) => state.covid.covid)
    const dispatch = useDispatch()

    const [inputs, setInputs] = useState({
        provinsi: '',
        status: '',
        jumlah: 0,
    })

    const [errors, setErrors] = useState({
        provinsi: false,
        status: false,
        jumlah: false,
    })

    const validation = () => {
        setErrors(prevErrors => ({
            ...prevErrors,
            provinsi: inputs.provinsi === '',
            status: inputs.status === '',
            jumlah: inputs.jumlah <= 0
        }))
        return inputs.provinsi !== '' && inputs.status !== '' && inputs.jumlah > 0
    }

    const resetInputs = () => setInputs({
        ...inputs,
        provinsi: '',
        status: '',
        jumlah: 0,
    })

    const updateProvinces = () => {
        const currentDate = new Date().toJSON().slice(0, 10);
        const update = covid.provinces.map(prov => {
            if (prov.kota === inputs.provinsi) {
                const updatedProv = { ...prov };
                const initValue = Number(updatedProv[inputs.status] || 0)
                updatedProv[inputs.status] = initValue + Number(inputs.jumlah);
                return updatedProv;
            }
            return prov
        })

        const updatedData = { ...covid, provinces: update, last_update: currentDate }
        dispatch(updateCovid(updatedData));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validation()) {
            updateProvinces()
            resetInputs()
        }

    }

    return (
        <StyledFormCovid>
            <Container display='flex-center-between'>
                <Side $shrinkMd='1' $basisMd='50%'>
                    <img src={concept} alt="Medical Care Illustration" />
                </Side>
                <Side $shrinkMd='1' $basisMd='40%'>
                    <Heading title='Form Covid' />
                    <Form onSubmit={handleSubmit}>
                        <InputGroup inputs={inputs} setInputs={setInputs} errors={errors} pesanError='Pilih provinsi yang tersedia!' label='Provinsi' inputAs='select' name='provinsi' value={inputs.provinsi}>
                            <option value=''>--- Please Select ---</option>
                            {covid.provinces?.map((province) => (
                                <option key={province.kota} value={province.kota}>
                                    {province.kota}
                                </option>
                            ))}
                        </InputGroup>
                        <InputGroup inputs={inputs} setInputs={setInputs} errors={errors} pesanError='Pilih status yang tersedia!' label='Status' inputAs='select' name='status' value={inputs.status}>
                            <option value=''>--- Please Select ---</option>
                            <option value='kasus'>Positif</option>
                            <option value='dirawat'>Dirawat</option>
                            <option value='sembuh'>Sembuh</option>
                            <option value='meninggal'>Meninggal</option>
                        </InputGroup>
                        <InputGroup inputs={inputs} setInputs={setInputs} errors={errors} pesanError='Jumlah harus lebih dari 0!' label='Jumlah' inputAs='input' name='jumlah' type='number' value={inputs.jumlah} />
                        <Button $scheme='primary' type='submit'>Submit</Button>
                    </Form>
                </Side>
            </Container>
        </StyledFormCovid>
    )
}

export default FormCovid