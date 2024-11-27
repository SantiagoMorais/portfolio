import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { subtitle } from "@styles/index";
import { PolygonEmoji } from "@components/ui/polygonEmoji";
import { ReturnButton } from "@components/ui/returnButton";

type AdvicePageProps = {
  title: string;
  adviceMessage: string;
  route: string;
  buttonText: string;
  icon: IconDefinition;
  polygonEmojiMessage?: string;
};

export const AdvicePage = ({
  adviceMessage,
  buttonText,
  icon,
  route,
  title,
  polygonEmojiMessage,
}: AdvicePageProps) => (
  <div className=" flex flex-col w-full items-center p-10 pb-20 gap-10">
    <h2
      className={`text-textColor text-large md:text-extraLarge text-center pb-2 ${subtitle({ afterContent: "secondaryOnCleanBg" })}`}
    >
      {title}
    </h2>
    <PolygonEmoji icon={icon} message={polygonEmojiMessage} />
    <p className="text-textColor text-base md:text-medium text-center">
      {adviceMessage}
    </p>
    <ReturnButton buttonText={buttonText} route={route} />
  </div>
);
