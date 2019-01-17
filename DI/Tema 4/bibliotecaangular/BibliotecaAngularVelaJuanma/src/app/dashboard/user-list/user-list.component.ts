import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar, MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { UsuarioInterface } from 'src/app/interfaces/usuario.interface';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';

const ELEMENT_DATA: UsuarioInterface[] = [];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'email', 'phone', 'notes', 'acciones'];  
  //dataSource: UsuarioInterface[];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usuarioService: UsuarioService, public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
      this.getListaUsuarios('Listado de usuarios cargado')
  }



  getListaUsuarios(mensaje:string){
    this.usuarioService.getAllUsers().subscribe(listaUsuarios =>{
      this.dataSource = new MatTableDataSource<UsuarioInterface>(listaUsuarios);
      this.dataSource.paginator = this.paginator

        this.snackBar.open(mensaje, 'X',{
          duration:3000,
          verticalPosition:'top'
        });
    },error =>{
      this.snackBar.open('Error al obtener usuarios', 'X',{
        duration:1000
      });
    });
  }

  getUsuarios(){
    this.usuarioService.getAllUsers().subscribe(listaUsuarios =>{
      this.dataSource.data=listaUsuarios;
    }, error =>{
      console.log('Error');
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showUsers(){
    this.usuarioService.getAllUsers().subscribe(userList =>{
      this.dataSource.data=userList;
    },error =>{
      console.log('Error, no hay datos');
    });
  }


  openDialogAddUser(){
    const dialogNewUser = this.dialog.open(DialogAddUserComponent);

    dialogNewUser.afterClosed().subscribe(resultado =>{
        this.showUsers();
    })
  }

  openDialogEditUser(element: UsuarioInterface){
    const dialogEditUser = this.dialog.open(DialogEditUserComponent,{
      width:'30%',
      data:{usuario:element},
    });

    dialogEditUser.afterClosed().subscribe(resultado =>{
      this.getListaUsuarios('Usuario Modificado');
    });

  }

  openDialogDeleteUser(usuario: UsuarioInterface){
    const dlgDeleteUser = this.dialog.open(DialogDeleteUserComponent,{
      data:{
        element:usuario
      }
    });

    dlgDeleteUser.afterClosed().subscribe(result =>{
      this.getUsuarios();
    },error =>{
      console.log(error);
    });

  }

}
