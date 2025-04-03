import { faImage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import { button } from "@styles/index";

export const ImageDialog = ({
  projectImage,
  projectName,
}: {
  projectImage: string;
  projectName: string;
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        className="group flex items-center bg-secondary p-4 text-white opacity-60 transition duration-300 hover:opacity-100 md:p-6"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <FontAwesomeIcon
          icon={faImage}
          title="Ver imagem"
          className="text-medium"
        />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-xs" />
      <Dialog.Content className="fixed z-20">
        <div className="fixed right-1/2 top-1/2 translate-x-1/2 translate-y-[-50%] rounded-2xl bg-panel p-16 shadow-lg shadow-black md:translate-y-[-45%]">
          <div className="max-h-[80dvw] w-[80dvw] overflow-x-hidden overflow-y-scroll rounded-l-2xl border border-secondary md:max-h-[70dvh]">
            <img
              src={projectImage}
              alt={`Imagem do projeto ${projectName}`}
              className="h-fit w-full object-cover object-top"
            />
          </div>
          <Dialog.Close className="absolute left-0 right-0 top-0 flex translate-y-[-8rem] justify-center">
            <p
              className={button({
                withBackground: "primaryColor",
                className: "flex gap-5",
              })}
            >
              <FontAwesomeIcon icon={faTimes} />
              Retornar
            </p>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
