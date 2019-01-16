import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { RegisterDto } from '../dto/register.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string;
  email:string;
  grupo:string;
  password:string;  

constructor(private authService: AuthService, private router: Router) { }
ngOnInit() {
}




doRegister() {
  const registerDto = new RegisterDto(this.username,this.email, this.grupo, this.password);
  this.authService.register(registerDto).subscribe(registerResp => {
    console.log(registerResp);
    this.authService.setRegisterData(registerResp);
    this.router.navigate(['inicio']);
  }, error => {
    console.log('Error en petición de Registro');
  }
  );
}

}