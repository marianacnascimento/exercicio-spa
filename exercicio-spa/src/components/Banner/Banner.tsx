import React from "react";
import { BannerStyled } from "./BannerStyled";

interface BannerProps {
    titulo: string;
}

export const Banner: React.FC<BannerProps> = ({ titulo }) => {
    return (
        <BannerStyled>
            <div>
                <h1>{titulo}</h1>
            </div>
        </BannerStyled>
    )
}