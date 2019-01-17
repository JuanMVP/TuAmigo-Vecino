import { Categoria } from "../interfaces/categoria.interface";
import { Tipo } from "../interfaces/tipo.interface";

export class CrearRecursoDto{
    title:string;
    autor:string;
    anyo:number;
    content:string;
    categoryId:number;
    typeId:number;

    constructor(title:string, autor:string,anyo:number,content:string,categoryId:number,typeId:number){
        this.title=title;
        this.autor=autor;
        this.anyo=anyo;
        this.content=content;
        this.categoryId=categoryId;
        this.typeId=typeId;
    }

}

