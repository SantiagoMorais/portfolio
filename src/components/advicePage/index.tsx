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
  <div className="flex w-full flex-col items-center gap-10 p-10 pb-20">
    <h2
      className={`pb-2 text-center text-large text-textColor md:text-extraLarge ${subtitle({ afterContent: "secondaryOnCleanBg" })}`}
    >
      {title}
    </h2>
    <PolygonEmoji icon={icon} message={polygonEmojiMessage} />
    <p className="text-center text-base text-textColor md:text-medium">
      {adviceMessage}
    </p>
    <ReturnButton buttonText={buttonText} route={route} />
  </div>
);
