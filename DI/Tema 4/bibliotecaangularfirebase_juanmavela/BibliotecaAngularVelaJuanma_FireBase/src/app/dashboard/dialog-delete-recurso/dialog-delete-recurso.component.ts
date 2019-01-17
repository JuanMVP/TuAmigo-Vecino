import { Component, OnInit,Inject } from '@angular/core';
import { RecursoInterface } from 'src/app/interfaces/recurso.interface';
//import { RecursoService } from 'src/app/services/recurso.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CrearRecurso } from 'src/app/interfaces/crear-recurso.interface';
import { RecursoFirestoreService } from 'src/app/services/recurso-firestore.service';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-delete-recurso',
  templateUrl: './dialog-delete-recurso.component.html',
  styleUrls: ['./dialog-delete-recurso.component.scss']
})
export class DialogDeleteRecursoComponent implements OnInit {

  recursos: CrearRecurso;
 dataSource: RecursoInterface[];
 palabraBorrar: string;
 
 public recurso;
 private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;


 constructor(
   @Inject(MAT_DIALOG_DATA) public data: any,
 public dialogRef: MatDialogRef<DialogDeleteRecursoComponent>,
 private recursoService: RecursoFirestoreService,
 private db: AngularFirestore) { 
  this.itemsCollection = db.collection('/recursos');
  this.items = this.itemsCollection.valueChanges();
  
 }

 ngOnInit() {
  this.recurso = this.data.recurso;
  console.log(this.recurso);



 }

 /*getRecursos() {
  
  this.recursoService.getAllRecursos().subscribe(listaRecursos => {
    this.dataSource = listaRecursos;

  }, error => {
    console.log('Error');
  });
}

 doEliminarRecurso(id) {
  this.recursoService.eliminarRecurso(id).subscribe(listaRecursos => {
   this.dialogRef.close();

  }, error => {
    console.log('Error.');
  });

}*/


  public recursoDelete(){
    this.recursoService.deleteRecurso(this.recurso.id).then(() => {
      console.log('Recurso Eliminado');
    }, (error) =>{
      console.log(error);
    })
  }


   validarDelete():boolean{
     let validar = true;
     if(this.palabraBorrar != 'ELIMINAR'){
       validar = false;
     }
     return validar;
   }

}

