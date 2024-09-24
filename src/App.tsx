import { Navbar } from "@components/navbar";
import customBg from "@assets/custom-background.png";
import { Home } from "@components/portfolio";
import { Footer } from "@components/footer";

export const App = () => {
  return (
    <section className="p-10 pb-20 bg-bg flex justify-center md:px-20 md:py-24 shadow">
      <div
        style={{
          background: `url(${customBg}) no-repeat center center`,
          backgroundSize: "cover",
        }}
        className="w-full h-full fixed z-0 opacity-40 top-0"
      ></div>
      <div className="z-10 w-full max-w-screen-2xl h-full bg-panel transition-all shadow-lg shadow-black ring-1 ring-secondaryPanel flex flex-col min-h-dvh">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </section>
  );
};
