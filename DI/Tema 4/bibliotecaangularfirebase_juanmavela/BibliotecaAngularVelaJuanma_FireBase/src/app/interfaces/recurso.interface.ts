import { Categoria } from "./categoria.interface";
import { Tipo } from "./tipo.interface";

export interface RecursoInterface{
    id:number;
    title:string;
    autor:string;
    anyo:number;
    content:string;
    free:boolean;
    category:Categoria;
    type:Tipo;
    
}