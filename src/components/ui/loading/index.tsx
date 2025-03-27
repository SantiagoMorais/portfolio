import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loading = () => (
  <div className="flex w-full items-center justify-center p-10">
    <p className="flex select-none flex-row items-center gap-5 rounded-lg bg-secondaryPanel px-10 py-6 text-center text-medium text-textColor">
      Carregando
      <FontAwesomeIcon spin icon={faSpinner} />
    </p>
  </div>
);
