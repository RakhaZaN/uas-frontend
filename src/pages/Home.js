import { useState } from "react";
import CovidForm from "../components/CovidForm";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provincy from "../components/Provincy";
import provinces from '../utils/constants/provinces'

const Main = () => {
  const [data, setData] = useState(provinces);

  return (
    <main>
      <Hero />
      <Global />
      <Provincy data={data} />
      <CovidForm data={data} setData={setData} />
    </main>
  );
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
