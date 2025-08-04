import { ReactNode } from "react";



export interface CardProps {
    title : string;
    description : string
    children : ReactNode;
    footer? : ReactNode;
    afterCard? : ReactNode;
}