import logo from "./logo.svg";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import DisplayAll from "./components/DisplayAll";

import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

export const App = () => {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
  };

export default App;



//import logo from "./logo.svg";
//import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
//import './App.css';
//import DisplayAll from "./components/DisplayAll";

//function App() {
  //return (
    //<BrowserRouter>
    //<h1>Native Market</h1>
    //<Routes>
      //<Route path="/" element={<DisplayAll/>} />
    //</Routes>
    //</BrowserRouter>



  //);
//}

//export default App;
//