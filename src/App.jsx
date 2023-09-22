import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Myagency from "./Components/Myagency";
import Spinner from "./Components/Spinner";
import AgencyList from "./Components/AgencyList";
import Footer from "./Components/Footer";
import Alert from "./Components/AlertCard";
function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Myagency" element={<Myagency />} />
          <Route path="/Alert" element={<Alert />} />
          <Route path="/Spinner" element={<Spinner />} />
          <Route path="/AgencyList" element={<AgencyList />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
}

export default App;
