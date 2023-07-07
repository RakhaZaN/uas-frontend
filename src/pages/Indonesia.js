import { useEffect } from "react"
import Hero from "../components/organisms/Hero"
import axios from "axios"
import ENDPOINTS from "../utils/constants/endpoints"
import SituationCards from "../components/organisms/SituationCards"
import Provinces from "../components/organisms/Provinces"
import { useDispatch, useSelector } from "react-redux"
import { updateCovid } from "../feature/covidSlice"

const Indonesia = () => {
    const covid = useSelector((state) => state.covid.covid)
    const dispatch = useDispatch()

    const getData = async () => {
        const response = await axios.get(ENDPOINTS.INDONESIA_SITUATIONS)
        dispatch(updateCovid(response.data))
    }

    useEffect(() => {
        getData()
    }, [])

    // console.log(data)
    return (
        <>
            <Hero />
            <SituationCards title='Indonesia' data={covid.indonesia} last_update={covid.last_update} />
            <Provinces title='Situation by Provinces' />
        </>
    )
}

export default Indonesia