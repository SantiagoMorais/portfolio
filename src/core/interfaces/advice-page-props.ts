import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IAdvicePageProps {
  title: string;
  adviceMessage: string;
  route: string;
  buttonText: string;
  icon: IconDefinition;
  polygonEmojiMessage?: string;
}
