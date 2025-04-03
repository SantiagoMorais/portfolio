import { PolygonEmoji } from "@/components/ui/polygonEmoji";
import { ReturnButton } from "@/components/ui/returnButton";
import { subtitle } from "@/styles/index";
import { IAdvicePageProps } from "@/core/interfaces/advice-page-props";

export const AdvicePage = ({
  adviceMessage,
  buttonText,
  icon,
  route,
  title,
  polygonEmojiMessage,
}: IAdvicePageProps) => (
  <div className="flex w-full flex-col items-center gap-10 p-10 pb-20">
    <h2
      className={`text-large text-textColor md:text-extraLarge pb-2 text-center ${subtitle({ afterContent: "secondaryOnCleanBg" })}`}
    >
      {title}
    </h2>
    <PolygonEmoji icon={icon} message={polygonEmojiMessage} />
    <p className="text-textColor md:text-medium text-center text-base">
      {adviceMessage}
    </p>
    <ReturnButton buttonText={buttonText} route={route} />
  </div>
);
