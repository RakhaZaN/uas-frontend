import { useEffect, useState } from "react";
import Hero from "../components/organisms/Hero";
import GlobalSituationCards from "../components/organisms/GlobalSituationCards";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoints";
import ByRegion from "../components/organisms/GlobalSituationCards/ByRegion";

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
      <GlobalSituationCards data={data.global} last_update={data.last_update} />
      <ByRegion data={data.regions} />
    </>
  );
}

export default Home;
