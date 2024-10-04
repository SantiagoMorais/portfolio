import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="fixed opacity-40 bottom-5 right-5 text-large p-3 text-primary bg-textColor size-[6rem] rounded-full flex items-center justify-center cursor-pointer duration-500 border-2 overflow-hidden border-transparent hover:opacity-100 group hover:border-primary hover:shadow-primary hover:shadow-lg md:bottom-10 md:right-10" onClick={() => handleScroll()}>
      <FontAwesomeIcon icon={faArrowUp} className="group-hover:scale-125 duration-500" />
    </button>
  );
};
