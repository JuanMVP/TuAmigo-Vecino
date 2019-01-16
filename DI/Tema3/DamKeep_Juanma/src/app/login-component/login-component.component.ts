import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  email= '';
  password='';
  numeros= "0123456789";
  

  constructor() { }

  ngOnInit() {
  }


  validateEmail(){
    if(this.email.indexOf('@')!= -1)
      return this.email;
  } 

  validatePassword(password){
    for (let i = 0; i < this.password.length; i++) {
        if(this.numeros.indexOf(this.password.charAt(i),0)!=-1)
          return this.password;
      
    }

    
  }

  verifyLogin(): boolean{
    let granted= true;
    if(this.email === '' || this.password === ''){
      granted = false;
    }

    return granted;
  }
  

}
