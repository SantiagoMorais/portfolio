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
    <button
      className="group bg-textColor text-large text-primary hover:border-primary hover:shadow-primary fixed right-5 bottom-5 flex size-[6rem] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-transparent p-3 opacity-40 duration-500 hover:opacity-100 hover:shadow-lg md:right-10 md:bottom-10"
      onClick={() => handleScroll()}
    >
      <FontAwesomeIcon
        icon={faArrowUp}
        className="duration-500 group-hover:scale-125"
      />
    </button>
  );
};
