export class RegisterDto{
    username: string;
    email: string;
    grupo: string;
    password:string;


   constructor(u:string, e:string, g:string, p:string){
       this.username=u;
       this.email=e;
       this.grupo=g;
       this.password=p;
   } 
}