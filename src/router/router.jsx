import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SkinTreatmentPage from "../pages/SkinTreatmentPage/SkinTreatmentPage";
import CosmeticSurgery from "@/pages/CosmeticSurgery";
import Cosmetics from "@/pages/Cosmetics";
import Training from "@/pages/Training";
// import About from "./pages/About/About";
// import Services from "./pages/Services/Services";
// import ServiceDetail from "./pages/Services/ServiceDetail";
// import Contact from "./pages/Contact/Contact";
// import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dieu-tri-da-tai-tham-my-vien-mailisa" element={<SkinTreatmentPage />} />
      <Route path="/phau-thuat-tham-my" element={<CosmeticSurgery />} />
      <Route path="/nhom-san-pham-mailisa" element={<Cosmetics />} />
      <Route path="/trang-dao-tao" element={<Training />} />
      {/* <Route path="/gioi-thieu" element={<About />} />
        <Route path="/dich-vu" element={<Services />} />
        <Route path="/dich-vu/:slug" element={<ServiceDetail />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
