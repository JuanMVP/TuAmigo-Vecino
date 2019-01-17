import { Component, OnInit,Inject  } from '@angular/core';
import { RecursoInterface } from 'src/app/interfaces/recurso.interface';
//import { RecursoService } from 'src/app/services/recurso.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Supercategoria } from 'src/app/interfaces/supercategoria.interface';
import { Tipo } from 'src/app/interfaces/tipo.interface';
import { Categoria } from 'src/app/interfaces/categoria.interface';
//import { CategoriaService } from 'src/app/services/categoria.service';
//import { TipoService } from 'src/app/services/tipo.service';
//import { SuperCategoriaService } from 'src/app/services/super-categoria.service';
import { MatSnackBar } from '@angular/material';
import { RecursoFirestoreService } from 'src/app/services/recurso-firestore.service';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-recurso',
  templateUrl: './dialog-edit-recurso.component.html',
  styleUrls: ['./dialog-edit-recurso.component.scss']
})
export class DialogEditRecursoComponent implements OnInit {

  /*recurso: RecursoInterface;
  arraySuperCategoria: Supercategoria[];
  arrayTipo:Tipo[];
  categoriaSeleccionada: number;
  tipoSeleccionado:number;
  arrayCategorias:Categoria[];*/
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  public documentId = null;
  public recursos = [];
  public newRecursoForm;
  public recurso;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private recursoService: RecursoFirestoreService,
  private db: AngularFirestore,
  //private recursoService: RecursoService,
  public dialogRef: MatDialogRef<DialogEditRecursoComponent>,
  //private categoriaService : CategoriaService,
  //private tipoService: TipoService,
  //private superCategoriaService: SuperCategoriaService,
  public snackBar: MatSnackBar) { 
    this.itemsCollection = db.collection('/recursos');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
    //this.getCategorias();
    //this.getTipos();
    //this.getListaSuperCategorias('Lista Cargada');

    this.recurso = this.data.recurso;
    console.log(this.recurso);
    this.newRecursoForm = new FormGroup({
      title: new FormControl(this.recurso.data.title, Validators.required),
      autor: new FormControl(this.recurso.data.autor, Validators.required),
      anyo: new FormControl(this.recurso.data.anyo),
      content: new FormControl(this.recurso.data.content)
  
    });
    
  }

    updateRecurso(){
      this.recurso.data.title = this.newRecursoForm.controls['title'].value;
      this.recurso.data.autor = this.newRecursoForm.controls['autor'].value;
      this.recurso.data.anyo = this.newRecursoForm.controls['anyo'].value;
      this.recurso.data.content = this.newRecursoForm.controls['content'].value;
     this.recursoService.update(this.recurso);
    }

  /*saveRecurso() {
    this.recursoService.updateRecurso(this.recurso).subscribe(recurso => {
      this.dialogRef.close();
    });
  }

  getCategorias() {
    
    this.categoriaService.getAllCategorias().subscribe(listaCategorias => {
      this.arrayCategorias = listaCategorias;
 
    }, error => {
      console.log('Error');
    });
  }


  getTipos() {   
    this.tipoService.getAllTipos().subscribe(listaTipos => {
      this.arrayTipo = listaTipos;
 
    }, error => {
      console.log('Error');
    });
  }

  getListaSuperCategorias(mensaje:string){
    this.superCategoriaService.getAllSuperCategory().subscribe(listaSuperCategorias =>{
      this.arraySuperCategoria= listaSuperCategorias;

      this.snackBar.open(mensaje,'X',{
        duration:3000,
        verticalPosition:'top'
      });
    },error =>{
      this.snackBar.open('Error al obtener super categorias','X',{

      });
    });
  }*/

}
