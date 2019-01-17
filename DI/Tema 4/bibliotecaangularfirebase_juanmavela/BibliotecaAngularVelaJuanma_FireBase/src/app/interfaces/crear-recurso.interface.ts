import { Categoria } from "./categoria.interface";
import { Tipo } from "./tipo.interface";

export interface CrearRecurso{
    title:string;
    autor:string;
    anyo:number;
    content:string;
    category:Categoria;
    type:Tipo;
}
