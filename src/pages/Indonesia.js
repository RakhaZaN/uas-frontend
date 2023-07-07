import { useEffect, useState } from "react"
import Hero from "../components/organisms/Hero"
import axios from "axios"
import ENDPOINTS from "../utils/constants/endpoints"
import SituationCards from "../components/organisms/SituationCards"
import Provinces from "../components/organisms/Provinces"

const Indonesia = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get(ENDPOINTS.INDONESIA_SITUATIONS)
        setData(response.data)
    }

    useEffect(() => {
        getData()
    }, [])

    // console.log(data)
    return (
        <>
            <Hero />
            <SituationCards title='Indonesia' data={data.indonesia} last_update={data.last_update} />
            <Provinces data={data.regions} />
        </>
    )
}

export default Indonesia