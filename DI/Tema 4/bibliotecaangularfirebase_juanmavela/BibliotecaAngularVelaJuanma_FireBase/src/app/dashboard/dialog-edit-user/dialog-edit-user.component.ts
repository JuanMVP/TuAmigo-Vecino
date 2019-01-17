import { Component, OnInit, Inject } from '@angular/core';
import { UsuarioInterface } from 'src/app/interfaces/usuario.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
//import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  usuario: UsuarioInterface;
  constructor(@Inject(MAT_DIALOG_DATA)public data :any, 
  //private usuarioService: UsuarioService,
  public dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  ngOnInit() {

      this.usuario = this.data.usuario;

  }

  /*saveUserUpdated(){
    this.usuarioService.updateUser(this.usuario).subscribe(usuario =>{
      this.dialogRef.close();
    })
  }
*/
}
