import { Blog } from "@/components/blog";
import { Post } from "@/components/blog/postsList/post";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pageNotFound";
import { ScrollToTop } from "./scrollToTop";

export const AppRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Post />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
