import { useEffect } from "react";
import AppRoutes from "./router/router";
import Footer from "./layout/Footer/Footer";
import Header from "@/layout/Header/Header";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-[130px]">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
