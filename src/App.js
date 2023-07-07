import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import theme from "./utils/constants/theme";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indonesia" element={<h1>Indonesia</h1>} />
        <Route path="/provinsi" element={<h1>Provinsi</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
