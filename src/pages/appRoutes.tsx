import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PortfolioPage } from "./portfolioPage";
import { PageNotFound } from "./pageNotFound";
import { Navbar } from "@components/navbar";
import { Footer } from "@components/footer";
import { BlogPage } from "./blogPage";
import { PostPage } from "./postPage";
import { ScrollToTop } from "./scrollToTop";
import { CertificatesPage } from "./certificatesPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<PostPage />} />
        <Route path="/certificados" element={<CertificatesPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
