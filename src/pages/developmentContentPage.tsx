import { AdvicePage } from "@components/advicePage";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";

export const DevelopmentContentPage = () => (
  <AdvicePage
    title="Conteúdo em desenvolvimento!"
    icon={faSmileWink}
    polygonEmojiMessage="Em breve!"
    adviceMessage="Se acalme! Esta página está em desenvolvimento e em breve traremos mais conteúdos para você. Enquanto isso, retorne à nossa página inicial."
    route="/"
    buttonText="Retornar"
  />
);
