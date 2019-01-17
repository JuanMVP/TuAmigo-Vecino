import { Component, OnInit,Inject } from '@angular/core';
import { RecursoInterface } from 'src/app/interfaces/recurso.interface';
import { RecursoService } from 'src/app/services/recurso.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CrearRecurso } from 'src/app/interfaces/crear-recurso.interface';

@Component({
  selector: 'app-dialog-delete-recurso',
  templateUrl: './dialog-delete-recurso.component.html',
  styleUrls: ['./dialog-delete-recurso.component.scss']
})
export class DialogDeleteRecursoComponent implements OnInit {

  recursos: CrearRecurso;
 dataSource: RecursoInterface[];
 palabraBorrar: string;
 name=this.data.element.name;
 id=this.data.element.id;


 constructor(private recursoService:RecursoService,
   @Inject(MAT_DIALOG_DATA) public data: any,
 public dialogRef: MatDialogRef<DialogDeleteRecursoComponent>) { }

 ngOnInit() {
 }

 getRecursos() {
  
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

}

   validarDelete():boolean{
     let validar = true;
     if(this.palabraBorrar != 'ELIMINAR'){
       validar = false;
     }
     return validar;
   }

}

