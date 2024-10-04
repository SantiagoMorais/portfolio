# Projeto pessoal - Portfólio Felipe Santiago

Veja o projeto completo na web em: [Portfólio Felipe Santiago](https://portfoliofelipesantiago.vercel.app)

![Visão principal do projeto](./src/assets/imgs/screenshots/main.png)

## Sumário

- [Imagens](#imagens)
  - [Visualização geral](#visualização-geral-pelo-desktop)
  - [Responsividade](#responsividade)
- [Bibliotecas](#bibliotecas)
  - [Dependências](#dependências)
  - [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)
- [Objetivos do projeto](#objetivos-do-projeto)
- [Funcionalidades](#funcionalidades)
  - [Footer](#footer)
  - [NavBar](#navbar)
    - [Esquema de troca de temas](#esquema-de-troca-de-temas)
      - [Componente ThemeTogglerButton](#componente-themetogglebutton)
      - [Funcionamento](#funcionamento)
  - [Advice Page](#advice-page)
  - [Portfólio](#portfólio)

## Imagens

### Visualização geral

![Visualização geral do projeto](./src/assets/gifs/desktop-preview.gif)

### Responsividade

![Responsividade do projeto](./src/assets/gifs/responsivity.gif)

## Bibliotecas

### Dependências

- [@apollo/client](https://www.apollographql.com/docs/react/): Biblioteca para gerenciar dados remotos usando GraphQL em aplicações React, facilitando a interação com APIs GraphQL.

- [@fortawesome](https://docs.fontawesome.com/web/use-with/react): Biblioteca FontAwesome focada no uso de ícones SVG em aplicações React.

- [@hookform/resolvers](https://react-hook-form.com/advanced-usage#Resolver): Pacote de resolvers para integrar bibliotecas de validação, como Zod, com o React Hook Form, simplificando a validação de formulários.

- [@paralleldrive/cuid2](https://github.com/paralleldrive/cuid2): Algoritmo gerador de IDs únicos para os dados no banco de dados.

- [@radix-ui/themes](https://www.radix-ui.com/docs/primitives/overview): Biblioteca para implementar temas e estilos consistentes em componentes de UI acessíveis.

- [github-automated-repos](https://www.npmjs.com/package/github-automated-repos): Biblioteca para gerenciar repositórios no GitHub de forma automatizada.

- [html-react-parser](https://github.com/wix/html-react-parser): Biblioteca para analisar HTML e convertê-lo em componentes React, facilitando a manipulação de conteúdo HTML.

- [lucide-react](https://lucide.dev): Biblioteca que fornece ícones e símbolos para React.

- [react-collapse](https://github.com/nkbt/react-collapse): Componente React para implementar animações de expansão e colapso (efeito carrosel).

- [react-hook-form](https://react-hook-form.com/): Biblioteca para gerenciamento de formulários em React, focada em validação e envio de dados.

- [react-router-dom](https://reactrouter.com/): Biblioteca para gerenciar rotas em aplicações React, facilitando a navegação entre diferentes páginas.

- [swiper](https://swiperjs.com/): Biblioteca para criar carrosséis e sliders em aplicações web, com suporte a toque e navegação por gestos.

- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): Combina classes do Tailwind CSS, especialmente quando há conflitos de estilos.

- [tailwind-variants](https://www.tailwind-variants.org): Biblioteca que ajuda a gerenciar e aplicar variantes de estilos no Tailwind CSS.

- [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths): Permite que o Vite reconheça e use os aliases de importação, simplificando importações. Exemplo, trocar um caminho longo como "../../../components/navbar" por "@components/navbar".

- [zod](https://zod.dev/): Biblioteca de validação de esquemas que garante a segurança dos dados.

### Dependências de Desenvolvimento

- [eslint](https://eslint.org/): Ferramenta de linting para identificar e corrigir problemas de estilo e qualidade de código.

- [postcss](https://postcss.org/): Ferramenta para transformar estilos CSS com plugins.

- [prettier](https://prettier.io/): Ferramenta de formatação de código que garante consistência no estilo do código.

- [tailwindcss](https://tailwindcss.com/): Framework CSS com classes utilitárias que facilita a estilização de elementos HTML/JSX.

## Objetivos do projeto

- Criar uma sessão de portfólio divida em:
  - Hero: Apresentação inicial;
  - Sobre mim: Informações adicionais, o que faço e opções de baixar os currículos em pt-BR e en-US;
  - Habilidades: Listagem de soft skills e habilidades técnicas;
  - Projetos: Listagem de projetos realizando vinculo direto com repositórios GitHub utilizando a biblioteca [github-automated-repos](https://www.npmjs.com/package/github-automated-repos);
- Criação de um blog pessoal utilizando Hygraph e manipulando dados através de queries GraphQL.
  - Listagem de publicações
  - Sistema de pesquisa através do título e filtros personalizados
  - Criação de sistema de paginação dos posts, carregados de 10 em 10.
- Sessão para entrar em contato para solicitar meus trabalhos
  - Landing page sobre meu trabalho e links para contato.

## Funcionalidades

O esquema de organização de pastas é possível ser vista neste diagrama:

<img src="./src/assets/imgs/foldersSchema.png" alt="Diagrama das pastas" />

Há outras pastas que possuem as imagens, páginas, funções, queries, interfaces e tipos, etc. Mas vamos resumir a funcionalidade do projeto através de seus componentes. Não vamos explicá-los em ordem, mas sim no nível de complexidade do componente.

### Footer

O Footer é o rodapé da página onde é possível visualizar a logo, os links de navegação da página e os links das redes sociais. Nenhuma lógica complexa.

### NavBar

A barra de navegação incorpora todo o cabeçalho, contendo os links de navegação no `AccordionMenu`, o `MenuItem` seria o link individual do menu, transformado em um componente reutilizável, para que não importa quantos links sejam adicionados, só será necessário adicioná-lo no arquivo json que comporta algumas informações do arquivo e ela será chamada no método `map` dentro do `NavBar` e renderizada. Por fim, o esquema de troca de tema da página foi focada no `ThemeTogglerButton`.

#### Esquema de troca de temas

Nossa aplicação utiliza TailwindCSS para estilizações, e personalizamos cores, fontes e outros aspectos no arquivo `tailwind.config.js`. A configuração abaixo demonstra como as variáveis de CSS são usadas para permitir a troca de temas:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        bg: "var(--bg)",
        panel: "var(--panel)",
        secondaryPanel: "var(--secondaryPanel)",
        textColor: "var(--textColor)",
        hoverEffect: "var(--hoverEffect)"
      },
      // ...
```

Com a propriedade `darkMode` ativada, o TailwindCSS reconhece que a aplicação alternará entre os modos dark e light. As cores são configuradas com a função `var(--nome)` para fazer referência às variáveis CSS definidas no arquivo de estilo principal, no nosso caso, em `"./src/index.css"`.

O tema dark é o padrão da aplicação, e as cores são definidas diretamente no `:root` (as variáveis de estilo raiz). Já para o tema light, utilizamos a classe `.light`, que contém as variáveis CSS correspondentes:

```css
.light {
  --primary: #00bd95;
  --secondary: #19584f;
  --tertiary: #f3eeea;
  --bg: #d8d2c2;
  --panel: #f3eeeab0;
  --secondaryPanel: #dfd6c6;
  --textColor: #000000;
  --hoverEffect: #dadada;
}

:root {
  --primary: #00bd95;
  --secondary: #19584f;
  --tertiary: #20272f;
  --bg: #303135;
  --panel: #20272fc7;
  --secondaryPanel: #171c22;
  --textColor: #ffffff;
  --hoverEffect: #ffffff;
}
```

### Componente ThemeToggleButton

Para alternar entre os temas, criamos o componente `ThemeToggleButton`, que gerencia a troca do tema globalmente. Ele utiliza o `useState` para armazenar o estado atual do tema e, ao clicar no botão, a função `toggleTheme` é acionada, alterando a classe `light` no `body`, o que permite alternar facilmente entre os temas sem precisar modificar outros componentes.

```tsx
import { useState } from "react";

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.toggle("light", newTheme === "light");
  };
  
  return (
    <button onClick={toggleTheme}>
      {/*...Resto do código*/}
    </button>
  );
};
```

### Funcionamento

- O tema dark é definido como padrão e está nas variáveis de `:root`.
- Ao clicar no botão, o estado do tema é alternado entre **dark** e **light**, e a classe `light` é adicionada ou removida do body, aplicando as novas cores definidas no CSS.

Com essa abordagem, o tema é alternado globalmente, simplificando a gestão de estilos para toda a aplicação.

### Advice Page

Componente reutilizável em todos os locais onde há um aviso, como página não encontrada, página em desenvolvimento, conteúdo não encontrado, entre outros. Já que todos estes avisos seguiam o mesmo padrão de estilização, com pequenas alterações, o componente `AdvicePage` foi criado. Esta é o `type` das props deste componente, que podem ser alternadas.

```tsx
type AdvicePageProps = {
  title: string;
  adviceMessage: string;
  route: string;
  buttonText: string;
  icon: IconDefinition;
  polygonEmojiMessage?: string;
};
```

Este é o resultado:

![Advice page](./src/assets/screenshots/advicePage.png)

De cima para baixo temos:
- `title: string`
- `icon: IconDefinition`: IconDefinition é a tipagem fornecida pela biblioteca FontAwesome para os ícones
- `polygonEmojiMessage?: string`
- `adviceMessage: string`
- `buttonText: string`
- `route: string`: é a rota onde o componente `Link` fornecido pelo [react-router-dom](https://reactrouter.com/) irá redirecionar o usuário diante desta página.

### Portfólio

Aqui fica a estrutura inicial do projeto, onde chamaríamos de **Home**, onde possui os componentes:

- Hero: Apresentação inicial do site
- AboutMe: Responsável por destacar informações sobre mim, Felipe.
- Projects: Os projetos do portfólio, onde abordaremos mais o uso do [github-automated-repos](https://www.npmjs.com/package/github-automated-repos), responsável por vincular nosso projeto ao GitHub.
- Skills: Detalhes sobre softskills e habilidades técnicas na área de programação
- UI: Pequenos componentes reutilizáveis ao longo de toda aplicação, como botões, componentes de carregamento, etc.

