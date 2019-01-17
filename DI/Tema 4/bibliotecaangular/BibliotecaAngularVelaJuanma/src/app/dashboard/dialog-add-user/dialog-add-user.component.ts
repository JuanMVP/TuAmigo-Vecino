import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  /*name:string;
  email:string;
  phone:string;
  password:string;
  notes:string;*/

  i = 0;

  hide = true;
  crearUsuarioForm: FormGroup;
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(4)])

  constructor(private usuarioService: UsuarioService, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit() {

    this.crearUsuarioForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: this.passwordControl,
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(4), CustomValidators.equalTo(this.passwordControl)]),
      phone: new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required]),


    })
  }


  addUser() {
    const crearUsuarioDto: UsuarioInterface = <UsuarioInterface>this.crearUsuarioForm.value;
    this.usuarioService.userCreate(crearUsuarioDto).subscribe(crearUsuarioResp => {
      this.dialogRef.close(crearUsuarioResp);
    })
  }
  /*passwordConfirm(){
     if(this.password === this.repeatPassword && this.password.length<4){
       return true;
     }else{
       return false;
     }
   }*/

  generar() {
    console.log('entra en generar');
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";

    let pass = '';
    for (this.i = 0; this.i < 7; this.i++) pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    this.crearUsuarioForm.controls['password'].setValue(pass);
    this.crearUsuarioForm.controls['repeatPassword'].setValue(pass);
  }
}
