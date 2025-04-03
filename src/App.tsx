import customBg from "@assets/imgs/custom-background.png";
import { ScrollButton } from "@components/ui/scrollButton";
import { AppRoutes } from "@pages/appRoutes";

export const App = () => (
  <section className="flex w-full justify-center overflow-x-hidden p-10 pb-20 shadow-sm transition-colors duration-150 md:px-20 md:py-24">
    <div
      style={{
        background: `url(${customBg}) no-repeat center center`,
        backgroundSize: "cover",
      }}
      className="fixed top-0 z-0 size-full opacity-40 transition-colors duration-150"
    />
    <div
      className="bg-panel ring-secondaryPanel z-10 flex h-full min-h-dvh w-full max-w-620 flex-col shadow-lg ring-1 shadow-black"
      style={{ transition: "background-color .15s, box-shadow .15s" }}
    >
      <AppRoutes />
      <ScrollButton />
    </div>
  </section>
);
