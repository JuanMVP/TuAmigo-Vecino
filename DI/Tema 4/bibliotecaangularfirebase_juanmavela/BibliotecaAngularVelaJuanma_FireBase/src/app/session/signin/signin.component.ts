import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SigninDto } from 'src/app/dto/login.dto';
//import { SessionService } from '../session.service';
import { SigninResponse } from 'src/app/interfaces/login-response.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email:string;
  password:string;


  loginForm: FormGroup;

  constructor(//private sessionService : SessionService,
     private router: Router ) { }

  ngOnInit() {
    this.loginForm = new FormGroup( {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',  [Validators.required, Validators.minLength(4)])
    });
  }

/*onSubmit(){
    const userLogin: LoginResponse = <LoginResponse>this.loginForm.value;
    this.sessionService.login(userLogin);
    console.log(this.loginForm.value);
    this.router.navigate(['/']);
  }*/

  /*doLogin() {
    const userLogin: SigninResponse = <SigninResponse>this.loginForm.value;
    this.sessionService.login(userLogin).subscribe(loginResp => {
      
      this.sessionService.setLoginData(loginResp);
      console.log(loginResp);
      this.router.navigate(['/recursos']);
    }, error => {
      console.log('Error en petición de login');
    }
    );*/
}






