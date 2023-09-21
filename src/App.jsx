import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import Myagency from "./Components/Myagency";
import Spinner from "./Components/Spinner";
import AgencyList from "./Components/AgencyList";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Myagency" element={<Myagency />} />
          <Route path="/Spinner" element={<Spinner />} />
          <Route path="/AgencyList" element={<AgencyList />} />
        </Routes>
      </Navbar>
      <Footer/>
    </>
  );
}

export default App;
