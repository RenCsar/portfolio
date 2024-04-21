import { createGlobalStyle } from "styled-components";

export const GlobalStyledComponents = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=IBM+Plex+Sans:wght@200;300;500;600&family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --preto-bg: #212226;
  --verde: #15cdcb;
  --azul: #5280e2;
  --branco: #fff;
  --padding-central: 0px 100px;
  --padding-600: 0px 50px;
  --padding-400: 0px 15px;
  --cinza: #969595;

  --header-height: 50px;
  --footer-height: 100px;
}

Body {
  font-family: "Poppins", sans-serif;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--cinza);
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background: var(--azul);
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumn = `
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const gradiente = `
  background: -webkit-linear-gradient(#15cdcb, #5280e2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const rep = `
  width: 1000px;
  height: 400px;
  border-radius: 10px;
`;

export const imgSize = `
  height: 250px;
`;

export const imgConfig = `
  ${imgSize}
  width: 400px;
  border-radius: 10px;
`;