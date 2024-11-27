import customBg from "@assets/imgs/custom-background.png";
import { ScrollButton } from "@components/ui/scrollButton";
import { AppRoutes } from "@pages/appRoutes";

export const App = () => (
  <section className="p-10 pb-20 w-full overflow-x-hidden flex justify-center transition-colors duration-150 md:px-20 md:py-24 shadow">
    <div
      style={{
        background: `url(${customBg}) no-repeat center center`,
        backgroundSize: "cover",
      }}
      className="size-full fixed z-0 opacity-40 top-0 transition-colors duration-150"
    />
    <div
      className="z-10 w-full max-w-screen-2xl h-full bg-panel shadow-lg shadow-black ring-1 ring-secondaryPanel flex flex-col min-h-dvh"
      style={{ transition: "background-color .15s, box-shadow .15s" }}
    >
      <AppRoutes />
      <ScrollButton />
    </div>
  </section>
);
