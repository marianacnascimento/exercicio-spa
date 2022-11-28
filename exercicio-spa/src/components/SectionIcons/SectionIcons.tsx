import React from "react";
import { IconsWrapper } from "../IconsWrapper/IconsWrapper";
import { BsCheck2Circle, BsLaptop, BsLayers } from "react-icons/bs";
import { SectionIconsStyled } from "./SectionIconsStyled";

export const SectionIcons: React.FC = () => {
  return (
    <SectionIconsStyled>
      <IconsWrapper
        icon={<BsLaptop />}
        titulo="Somente para laptop"
        texto="Vamos aprender como utilizar um framwork"
      />
      <IconsWrapper
        icon={<BsLayers />}
        titulo="Criado com componentes"
        texto="Utilizamos o styled-components"
      />
      <IconsWrapper
        icon={<BsCheck2Circle />}
        titulo="Fácil aproveitamento"
        texto="Estamos no caminho"
      />
    </SectionIconsStyled>
  );
};
