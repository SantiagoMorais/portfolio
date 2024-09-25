import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PortfolioPage } from "./portfolioPage";
import { Navbar } from "@components/navbar";
import { Footer } from "@components/footer";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
