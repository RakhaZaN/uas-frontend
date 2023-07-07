import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import theme from "./utils/constants/theme";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Indonesia from "./pages/Indonesia";
import Provinsi from "./pages/Provinsi";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indonesia" element={<Indonesia />} />
        <Route path="/provinsi" element={<Provinsi />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
