import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface AdvicePageProps {
  title: string;
  adviceMessage: string;
  route: string;
  buttonText: string;
  icon: IconDefinition;
  polygonEmojiMessage?: string;
}
