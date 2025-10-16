import { useEffect } from "react";
import AppRoutes from "./router/router";
import Footer from "./layout/Footer/Footer";
import Header from "@/layout/Header/Header";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-[80px]">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
