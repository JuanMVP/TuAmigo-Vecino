import { Component, OnInit, Inject } from '@angular/core';
import { CrearUsuario } from 'src/app/interfaces/crear-usuario.interface';
import { UsuarioInterface } from 'src/app/interfaces/usuario.interface';
//import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent implements OnInit {
    usuarios: CrearUsuario;
    dataSource: UsuarioInterface[];
    palabraBorrar:string;
    name=this.data.element.name;
    id=this.data.element.id;


  constructor(
    @Inject(MAT_DIALOG_DATA)public data:any, public dialogRef: MatDialogRef<DialogDeleteUserComponent>) { }

  ngOnInit() {
  }


  /*getUsuarios(){
    this.usuarioService.getAllUsers().subscribe(listaUsuarios =>{
      this.dataSource= listaUsuarios;
    }, error =>{
      console.log('Error');
    });
  }

  doEliminarUsuario(id){
    this.usuarioService.deleteUser(id).subscribe(listaUsuarios =>{
      this.dialogRef.close();
    }, error =>{
      console.log('Error');
    });
  }

  validarDelete():boolean{
    let validar = true;
    if(this.palabraBorrar !='ELIMINAR'){
      validar = false;
    }

    return validar;
  }
*/
}
