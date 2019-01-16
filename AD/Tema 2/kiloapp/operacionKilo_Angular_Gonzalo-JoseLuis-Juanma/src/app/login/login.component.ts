import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username= '';
  email = '';
  password = '';
  numeros = "0123456789";
  


  constructor(private authService: AuthService, private router: Router) { }
  

  ngOnInit() {
  }


  /*validateEmail() {
    if (this.email.indexOf('@') != -1)
      return this.email;
  }

  validatePassword(password) {
    for (let i = 0; i < this.password.length; i++) {
      if (this.numeros.indexOf(this.password.charAt(i), 0) != -1)
        return this.password;

    }


  }
  verifyLogin(): boolean {
    let granted = true;
    if (this.email === '' || this.password === '') {
      granted = false;
    }

    return granted;
  }*/

  doLogin() {
    const loginDto = new LoginDto(this.username, this.password);
    console.log(this.username);
    console.log(this.password);
    this.authService.login(loginDto).subscribe(loginResp => {
      console.log(loginResp);
      this.authService.setLoginData(loginResp);
    if (this.authService.getRole() == 'ROLE_ADMIN'){
      this.router.navigate(['inicioAdmin']);

    }else{
      this.router.navigate(['inicio']);
    }
      

    }, error => {
      console.log(error);
    }
    );
}

}
