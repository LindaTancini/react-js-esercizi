//IMPORTAZIONI
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EsercizioDue from "./components/EsercizioDue";
import EsercizioTre from "./components/EsercizioTre";
import EsercizioUno from "./components/EsercizioUno";
import EsercizioQuattro from "./components/EsercizioQuattro";
import Home from "./pages/Home";
import About from "./pages/About";
import EsercizioGatti from "./components/EsercizioGatti";

function App() {
  return (
    <Router>
      <EsercizioQuattro />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/esercizio1" element={<EsercizioUno />} />
        <Route path="/esercizio2" element={<EsercizioDue />} />
        <Route path="/esercizio3" element={<EsercizioTre />} />
        <Route path="/eserciziogatti" element={<EsercizioGatti />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
