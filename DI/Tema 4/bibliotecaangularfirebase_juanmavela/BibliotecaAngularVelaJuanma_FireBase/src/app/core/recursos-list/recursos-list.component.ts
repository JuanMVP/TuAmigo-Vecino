import { Component, OnInit,ViewChild } from '@angular/core';
import { RecursoInterface } from '../../interfaces/recurso.interface';
//import { SessionService } from 'src/app/session/session.service';
import { MatSnackBar, MatDialog } from '@angular/material';
//import { RecursoService } from 'src/app/services/recurso.service';
import { DialogAddRecursoComponent } from 'src/app/dashboard/dialog-add-recurso/dialog-add-recurso.component';
import { CrearRecurso } from 'src/app/interfaces/crear-recurso.interface';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { DialogEditRecursoComponent } from 'src/app/dashboard/dialog-edit-recurso/dialog-edit-recurso.component';
import { DialogDeleteRecursoComponent } from 'src/app/dashboard/dialog-delete-recurso/dialog-delete-recurso.component';
import { PrestarComponent } from 'src/app/dashboard/prestar/prestar.component';
import { DevolverComponentComponent } from 'src/app/dashboard/devolver-component/devolver-component.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RecursoFirestoreService } from 'src/app/services/recurso-firestore.service';
import { CategoriaFirestoreService } from 'src/app/services/categoria-firestore.service';
import { TipoFirestoreService } from 'src/app/services/tipo-firestore.service';


const ELEMENT_DATA: RecursoInterface[] = [];

@Component({
  selector: 'app-recursos-list',
  templateUrl: './recursos-list.component.html',
  styleUrls: ['./recursos-list.component.css']
})
export class RecursosListComponent implements OnInit {

  public recursos = [];

  displayedColumns: string[] = ['id', 'title', 'autor', 'anyo', 'descripcion', 'url', 'disponible', 'categoria', 'tipo', 'acciones',];  
  //dataSource;
  //recursos:CrearRecurso;
  dataSource: RecursoInterface[];
  dataSources = new MatTableDataSource(ELEMENT_DATA);
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  public listaRecursos : Observable<any>

  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public recursoService: RecursoFirestoreService,
    public categoriaService: CategoriaFirestoreService,
    public tipoService: TipoFirestoreService,
    public dialog: MatDialog
  ){}

  /*constructor(db: AngularFirestore, public snackBar: MatSnackBar, public dialog: MatDialog) { 
    this.itemsCollection = db.collection('/recursos');
    this.items= this.itemsCollection.valueChanges();
  }*/

  ngOnInit() {
    //this.getListaRecursos('Listado de recursos cargado');
    //this.showData();  
    
    this.recursoService.getAll().subscribe(recursosSnapshot => {
      this.recursos = [];
      //recorro la lista de recursos
      recursosSnapshot.forEach((recurso: any) => {
        //por cada recurso que recorro genero un elemento nuevo con el id y los datos
        const newRecurso = {
          id: recurso.payload.doc.id,
          data: recurso.payload.doc.data()

        };
        this.recursos.push(newRecurso);

        /*this.categoriaService.getOne(newRecurso.data.categories).subscribe(categoriesSnapshot =>{
          newRecurso.data.categories = categoriesSnapshot.payload.data();
        });

        this.tipoService.getOne(newRecurso.data.types).subscribe(typesSnapshot => {
          newRecurso.data.types = typesSnapshot.payload.data();
          this.recursos.push(newRecurso);
        })*/

        /*this.categoriaService.getOne(newRecurso.data.categories).subscribe(categoriaSnapshot => {
          newRecurso.data.categories = categoriaSnapshot.payload.data();
        });


        this.tipoService.getOne(newRecurso.data.types).subscribe(tipoSnapshot => {
          newRecurso.data.types = tipoSnapshot.payload.data();
          

        });*/



      })
    })


  }

  
  /*getListaRecursos(mensaje:string){
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
  }*/



  openDialogCrearRecurso(){
    const dialogNuevoRecurso = this.dialog.open(DialogAddRecursoComponent);
    
    dialogNuevoRecurso.afterClosed().subscribe(resultado =>{
      
      
    })
  }



  editarRecurso(element: RecursoInterface) {
    const dialogoEditarRecurso = this.dialog.open(DialogEditRecursoComponent, {
      width:'30%',
      data: { recurso:element},
    });

    dialogoEditarRecurso.afterClosed().subscribe(result => {
      this.recursoService.getAll();
    });
  }

  openDialogEliminarRecurso(recurso: RecursoInterface){
    const dlgDeleteResource = this.dialog.open(DialogDeleteRecursoComponent,{
      data:{
        element:recurso
      }
    });

    dlgDeleteResource.afterClosed().subscribe(result =>{
      this.recursoService.getAll();
    },error =>{
      console.log(error);
    });
  }

  /*abrirPrestar(element: RecursoInterface) {
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
*/
}
