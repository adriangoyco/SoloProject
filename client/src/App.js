import logo from "./logo.svg";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import DisplayAll from "./components/DisplayAll";
import ListingForm from "./components/ListingForm";
import View from "./components/View";

function App() {
  return (
    <BrowserRouter>
    <h1>Native Market</h1>
    <Routes>
      <Route path="/" element={<DisplayAll/>} />
      <Route path="/view/:id" element={<View/>} />
      <Route path="/addproduct" element={<ListingForm/>} />
    </Routes>
    </BrowserRouter>



  );
}

export default App;