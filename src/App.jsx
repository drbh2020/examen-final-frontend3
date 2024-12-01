
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";


import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="" element={<h1>Error 404 - Page not Found</h1>} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
