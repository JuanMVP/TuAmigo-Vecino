import { Component, OnInit,ViewChild } from '@angular/core';
import { RecursoInterface } from '../../interfaces/recurso.interface';
import { SessionService } from 'src/app/session/session.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { RecursoService } from 'src/app/services/recurso.service';
import { DialogAddRecursoComponent } from 'src/app/dashboard/dialog-add-recurso/dialog-add-recurso.component';
import { CrearRecurso } from 'src/app/interfaces/crear-recurso.interface';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { DialogEditRecursoComponent } from 'src/app/dashboard/dialog-edit-recurso/dialog-edit-recurso.component';
import { DialogDeleteRecursoComponent } from 'src/app/dashboard/dialog-delete-recurso/dialog-delete-recurso.component';
import { PrestarComponent } from 'src/app/dashboard/prestar/prestar.component';
import { DevolverComponentComponent } from 'src/app/dashboard/devolver-component/devolver-component.component';

const ELEMENT_DATA: RecursoInterface[] = [];

@Component({
  selector: 'app-recursos-list',
  templateUrl: './recursos-list.component.html',
  styleUrls: ['./recursos-list.component.css']
})
export class RecursosListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'autor', 'anyo', 'descripcion', 'disponible', 'categoria', 'tipo', 'acciones','prestamos'];  
  //dataSource;
  recursos:CrearRecurso;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private recursoService: RecursoService, public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.getListaRecursos('Listado de recursos cargado');
    this.showData();  
  }

  getListaRecursos(mensaje:string){
    this.recursoService.getAllRecursos().subscribe(listaRecursos =>{
      this.dataSource = new MatTableDataSource<RecursoInterface>(listaRecursos);
      this.dataSource.paginator = this.paginator


      this.snackBar.open(mensaje, 'X',{
        duration:3000,
        verticalPosition: 'top'
      });
    },error =>{
      this.snackBar.open('Error al obtener los recursos', 'X',{
        duration:1000
      });
    } );
  }

  getRecursos() {
    
    this.recursoService.getAllRecursos().subscribe(listaRecursos => {
      this.dataSource.data = listaRecursos;
 
    }, error => {
      console.log('Error');
    });
  }

  showData(){
    this.recursoService.getAllRecursos().subscribe(recursosList =>{
      this.dataSource.data=recursosList;
    }, error =>{
      console.log('Error , no ha recibido datos');
    })
  }



  openDialogCrearRecurso(){
    const dialogNuevoRecurso = this.dialog.open(DialogAddRecursoComponent);
    
    dialogNuevoRecurso.afterClosed().subscribe(resultado =>{
      
      this.showData();
    })
  }



  editarRecurso(element: RecursoInterface) {
    const dialogoEditarRecurso = this.dialog.open(DialogEditRecursoComponent, {
      width:'30%',
      data: { recurso:element},
    });

    dialogoEditarRecurso.afterClosed().subscribe(result => {
      this.getListaRecursos('Recurso modificada');
    });
  }

  openDialogEliminarRecurso(recurso: RecursoInterface){
    const dlgDeleteResource = this.dialog.open(DialogDeleteRecursoComponent,{
      data:{
        element:recurso
      }
    });

    dlgDeleteResource.afterClosed().subscribe(result =>{
      this.getRecursos();
    },error =>{
      console.log(error);
    });
  }

  abrirPrestar(element: RecursoInterface) {
    const prestar = this.dialog.open(PrestarComponent, {
      width: '30%',
      data: { recurso: element },
    });

    prestar.afterClosed().subscribe(result => {
      this.getListaRecursos('Recurso prestado');
    });
  }
  openDevolver(element: RecursoInterface) {
    const devolver = this.dialog.open(DevolverComponentComponent, {
      width: '30%',
      data: { recurso: element },
    });

    devolver.afterClosed().subscribe(result => {
      this.getListaRecursos('Recurso devolvido');
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
