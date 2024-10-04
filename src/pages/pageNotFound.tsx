import { AdvicePage } from "@components/advicePage";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

export const PageNotFound = () => {
  return (
    <AdvicePage
      title="Ops, página não encontrada"
      icon={faFrown}
      adviceMessage="Não encontramos a página que você procura. Por favor, tente novamente ou retorne para a página inicial."
      route="/"
      buttonText="Retornar"
      polygonEmojiMessage="404"
    />
  );
};
