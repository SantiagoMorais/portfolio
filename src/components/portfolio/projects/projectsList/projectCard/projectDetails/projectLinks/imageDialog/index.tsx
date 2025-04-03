import { faImage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import { button } from "@/styles/index";
import imageNotFound from "@/assets/imgs/image-not-found.jpg";

export const ImageDialog = ({
  projectImage,
  projectName,
}: {
  projectImage: string | undefined;
  projectName: string;
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        className="group bg-secondary flex items-center p-4 text-white opacity-60 transition duration-300 hover:opacity-100 md:p-6"
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
      <Dialog.Overlay className="bg-opacity-50 fixed inset-0 z-10 bg-black backdrop-blur-xs" />
      <Dialog.Content className="fixed z-20">
        <div className="bg-panel fixed top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] rounded-2xl p-16 shadow-lg shadow-black md:translate-y-[-45%]">
          <div className="border-secondary max-h-[80dvw] w-[80dvw] overflow-x-hidden overflow-y-scroll rounded-l-2xl border md:max-h-[70dvh]">
            <img
              src={projectImage ? projectImage : imageNotFound}
              alt={`Imagem do projeto ${projectName}`}
              className="h-fit w-full object-cover object-top"
            />
          </div>
          <Dialog.Close className="absolute top-0 right-0 left-0 flex translate-y-[-8rem] justify-center">
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
