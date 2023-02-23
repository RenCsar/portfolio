export type TButton = {
  texto: string;
  link?: string;
};

export type TProjetos = {
  nome: string;
  tecnologias: string[];
  descricao: string;
  img: string;
  imgBg: string;
  site: string;
  repositorio: string;
};

export type TLink = {
  link: string | undefined;
};