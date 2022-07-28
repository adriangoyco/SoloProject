import logo from "./logo.svg";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import DisplayAll from "./components/DisplayAll";
import ListingForm from "./components/ListingForm";
import View from "./components/View";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
    <h1>Native Market</h1>
    <Link to={"/addproduct"}>Add New Listing</Link>
    <Routes>
      <Route path="/" element={<DisplayAll/>} />
      <Route path="/product/:id" element={<View/>} />
      <Route path="/addproduct" element={<ListingForm/>} />
      <Route path="/edit/:id" element={<Edit/>} />
    </Routes>
    </BrowserRouter>



  );
}

export default App;