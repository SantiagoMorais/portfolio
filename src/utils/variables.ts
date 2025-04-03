import { env } from "@/env";

const formatMessageForWeb = (message: string): string => {
  return encodeURIComponent(message);
};

const greetingsHour = () => {
  const date = new Date();
  const hour = date.getHours();
  const inTheMorning = hour >= 6 && hour < 12;
  const inTheAfternoon = hour >= 12 && hour < 18;
  const inTheNight = hour >= 18 && hour < 24;

  switch (true) {
    case inTheMorning:
      return "Bom dia";
    case inTheAfternoon:
      return "Boa tarde";
    case inTheNight:
      return "Boa noite";
    default:
      return "Olá";
  }
};

const defaultWhatsappMessage: string = `${greetingsHour()}, Felipe! Encontrei o seu contato em seu portfólio e gostaria de conversar`;
export const whatsAppLink: string = `https://api.whatsApp.com/send?phone=${env.VITE_PHONE_NUMBER}&text=${formatMessageForWeb(defaultWhatsappMessage)}`;
