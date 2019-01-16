export class User{
    
    username:string;
    email:string;
    grupo:string;
    password:string;


    constructor(username:string, email:string, grupo:string, password:string){
        this.username=username;
        this.email=email;
        this.grupo=grupo;
        this.password=password;
    }

}