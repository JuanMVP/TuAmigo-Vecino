import { Component, OnInit,Inject } from '@angular/core';
import { RecursoInterface } from 'src/app/interfaces/recurso.interface';
//import { RecursoService } from 'src/app/services/recurso.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-devolver-component',
  templateUrl: './devolver-component.component.html',
  styleUrls: ['./devolver-component.component.scss']
})
export class DevolverComponentComponent implements OnInit {
  recurso: RecursoInterface;
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialog: MatDialogRef<DevolverComponentComponent>) { }

  ngOnInit() {

    this.recurso=this.data.recurso;
  }

  /*devolverRecurso(){
    this.recursoService.devolverRecurso(this.recurso).subscribe(listaRecursos =>{
      this.dialog.close();

    }, error =>{
      console.log('Error');
    });
  }
*/
}
