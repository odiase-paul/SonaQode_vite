import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./component/NavBar/NavBar";
import AboutUs from "./component/AboutUs/AboutUs";
import SoftwareDev from "./component/Services/SoftwareDev/SoftwareDev";
import DataAnalytics from "./component/Services/DataAnalytics/DataAnalytics";
import CyberSecurity from "./component/Services/CyberSecurity/CyberSecurity";
import CorporateCulture from "./component/CorporateCulture/CorporateCulture";
import ContactUs from "./component/ContactUs/ContactUs";
import Home from "./component/Home/Home";
import GetQuote from "./component/GetQuote/GetQuote";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/softwareDev" element={<SoftwareDev />} />
        <Route path="/dataAnalytics" element={<DataAnalytics />} />
        <Route path="/cyberSecurity" element={<CyberSecurity />} />
        <Route path="/corporateCul" element={<CorporateCulture />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/getQuote" element={<GetQuote />} />
      </Routes>
    </div>
  );
}

export default App;
