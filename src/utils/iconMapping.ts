import { faBook, faCode, faKey, faLaptopCode, faServer, faTools, IconDefinition } from "@fortawesome/free-solid-svg-icons";

const iconMapping: Record<string, IconDefinition> = {
  code: faCode,
  tools: faTools,
  book: faBook,
  key: faKey,
  backend: faServer,
};

const defaultIcon = faLaptopCode;

export { iconMapping, defaultIcon };


