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
import Footer from "./component/Footer/Footer";
import PrivacyPolicy from "./component/PrivacyPolicy/PrivacyPolicy";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import MobileApp from "./component/Services/SoftwareDev/servicesFiles/mobileApp";
import BackendDev from "./component/Services/SoftwareDev/servicesFiles/BackendDev";
import FrontEndDev from "./component/Services/SoftwareDev/servicesFiles/FrontEndDev";
import FullStackDev from "./component/Services/SoftwareDev/servicesFiles/FullStackDev";
import ItSupportEng from "./component/Services/SoftwareDev/servicesFiles/ItSupportEng";
import VideoEditor from "./component/Services/SoftwareDev/servicesFiles/VideoEditor";
import UiUxDesigner from "./component/Services/SoftwareDev/servicesFiles/UiUxDesigner";
import QaTester from "./component/Services/SoftwareDev/servicesFiles/QaTester";
function App() {
  return (
    <div>
      <ScrollToTop />
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/mobileApp" element={<MobileApp />} />
        <Route path="/backendDev" element={<BackendDev />} />
        <Route path="/frontendDev" element={<FrontEndDev />} />
        <Route path="/fullStackDev" element={<FullStackDev />} />
        <Route path="/itSupportEng" element={<ItSupportEng />} />
        <Route path="/videoEditor" element={<VideoEditor />} />
        <Route path="/uiuxDesigner" element={<UiUxDesigner />} />
        <Route path="/qaTester" element={<QaTester />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
