export class CampaingCreateDto{
    nombre:string;
    descripcion:string;
    codigo:string;
    


    constructor(nombre: string,descripcion:string, codigo:string){
            this.nombre=nombre;
            this.descripcion=descripcion;
            this.codigo=codigo;
    }


}

