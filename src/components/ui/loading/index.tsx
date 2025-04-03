import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loading = () => (
  <div className="flex w-full items-center justify-center p-10">
    <p className="bg-secondaryPanel text-medium text-textColor flex flex-row items-center gap-5 rounded-lg px-10 py-6 text-center select-none">
      Carregando
      <FontAwesomeIcon spin icon={faSpinner} />
    </p>
  </div>
);
