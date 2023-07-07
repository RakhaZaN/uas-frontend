import { useEffect, useState } from "react";
import Hero from "../components/organisms/Hero";
import SituationCards from "../components/organisms/SituationCards";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoints";
import ByRegion from "../components/organisms/SituationCards/ByRegion";

const Home = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get(ENDPOINTS.GLOBAL_SITUATIONS)
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <Hero />
      <SituationCards title='Global' data={data.global} last_update={data.last_update} />
      <ByRegion data={data.regions} />
    </>
  );
}

export default Home;
