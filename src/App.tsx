import { Navbar } from "@components/navbar";
import customBg from "@assets/background-image.png"

export const App = () => {
  return (
    <section className="p-24 bg-bg flex justify-center">
      {/* <div style={{background: `url(${customBg}) no-repeat center center`, backgroundSize: "cover"}} className="w-full h-full fixed z-0 opacity-40 top-0"></div> */}
      <div className="z-10 w-full max-w-screen-2xl h-screen bg-panel shadow-lg shadow-black ring-1 ring-secondaryPanel px-10 py-5">
        <Navbar />
      </div>
    </section>
  );
};
