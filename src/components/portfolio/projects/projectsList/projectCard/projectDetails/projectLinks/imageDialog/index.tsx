import { faImage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import { button } from "@styles/index";

type ImageDialogProps = {
  projectImage: string;
  projectName: string;
};

export const ImageDialog = ({
  projectImage,
  projectName,
}: ImageDialogProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        className="bg-secondary text-white transition duration-300 opacity-60 hover:opacity-100 flex items-center group p-4 md:p-6"
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
      <Dialog.Overlay className="bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0 z-10" />
      <Dialog.Content className="fixed z-20 ">
        <div className="fixed top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] bg-panel p-16 rounded-2xl shadow-lg shadow-black md:translate-y-[-45%]">
          <div className="w-[80dvw] max-h-[80dvw] overflow-y-scroll overflow-x-hidden rounded-l-2xl border border-secondary md:max-h-[70dvh]">
            <img
              src={projectImage}
              alt={`Imagem do projeto ${projectName}`}
              className="w-full h-fit object-cover object-top"
            />
          </div>
          <Dialog.Close className="absolute top-0 right-0 left-0 flex justify-center translate-y-[-8rem]">
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
