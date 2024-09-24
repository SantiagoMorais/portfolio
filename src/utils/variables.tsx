function formatMessageForWeb(message: string): string {
  return encodeURIComponent(message);
}

function greetingsHour() {
  const date = new Date();
  const hour = date.getHours();
  const inTheMorning = hour >= 6 && hour < 12;
  const inTheAfternon = hour >= 12 && hour < 18;
  const inTheNight = hour >= 18 && hour < 24;

  switch (true) {
    case inTheMorning:
      return "Bom dia";
    case inTheAfternon:
      return "Boa tarde";
    case inTheNight:
      return "Boa noite";
    default:
      return "Olá";
  }
}

export const phoneNumber: number = 5531996951033;

const defaultWhatsappMessage: string = `${greetingsHour()}, Felipe! Encontrei o seu contato em seu portfólio e gostaria de conversar`;

export const whatsAppLink: string = `https://api.whatsApp.com/send?phone=${phoneNumber}&text=${formatMessageForWeb(defaultWhatsappMessage)}`;
export const githubRepositoriesLink: string = "https://github.com/SantiagoMorais?tab=repositories";
export const email: string = "contatofelipesantiago@gmail.com";
export const linkedinUrl: string = "https://www.linkedin.com/in/felipe-santiago-morais/";
export const githubProfile: string = "https://github.com/SantiagoMorais";
