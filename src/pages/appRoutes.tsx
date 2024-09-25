import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PortfolioPage } from "./portfolioPage";
import { PageNotFound } from "./pageNotFound";
import { Navbar } from "@components/navbar";
import { Footer } from "@components/footer";
import { BlogPage } from "./blogPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
