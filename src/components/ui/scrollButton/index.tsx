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
      className="group fixed bottom-5 right-5 flex size-[6rem] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-transparent bg-textColor p-3 text-large text-primary opacity-40 duration-500 hover:border-primary hover:opacity-100 hover:shadow-lg hover:shadow-primary md:bottom-10 md:right-10"
      onClick={() => handleScroll()}
    >
      <FontAwesomeIcon
        icon={faArrowUp}
        className="duration-500 group-hover:scale-125"
      />
    </button>
  );
};
