export class CrearUsuarioDto{
    name:string;
    email:string;
    password:string;
    phone:string;
    notes:string;


    constructor(n:string,e:string,p:string,ph:string,nt:string){
            this.name=n;
            this.email=e;
            this.password=p;
            this.phone=ph;
            this.notes=nt;
    }
}