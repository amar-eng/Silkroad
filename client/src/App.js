import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TurkishHome from "./pages/TurkishHome";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turkish" element={<TurkishHome />} />
      </Routes>
    </>
  );
}

export default App;
