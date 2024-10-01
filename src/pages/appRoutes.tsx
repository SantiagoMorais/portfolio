import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PortfolioPage } from "./portfolioPage";
import { PageNotFound } from "./pageNotFound";
import { Navbar } from "@components/navbar";
import { Footer } from "@components/footer";
import { BlogPage } from "./blogPage";
import { PostPage } from "./postPage";
import { DevelopmentContentPage } from "./developmentContentPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<PostPage />} />
        <Route path="/contato" element={<DevelopmentContentPage />}/>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
