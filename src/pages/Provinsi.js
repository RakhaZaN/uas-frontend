import Hero from "../components/organisms/Hero"
import Provinces from "../components/organisms/Provinces"
import FormCovid from "../components/organisms/FormCovid"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { updateCovid } from "../feature/covidSlice"
import data from "../utils/constants/provinces"

const Provinsi = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateCovid(data))
    }, [])

    return (
        <div>
            <Hero />
            <Provinces title='Provinsi' />
            <FormCovid />
        </div>
    )
}

export default Provinsi