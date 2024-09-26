import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loading = () => {
  return (
    <div className="flex w-full items-center justify-center p-10">
        <p className="px-10 py-6 bg-secondaryPanel rounded-lg flex flex-row items-center text-textColor select-none text-center gap-5 text-medium">
            Carregando
            <FontAwesomeIcon spin icon={faSpinner}/>
            </p>
    </div>
  );
};
