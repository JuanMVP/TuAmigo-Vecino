import { Component, OnInit,Inject  } from '@angular/core';
import { RecursoInterface } from 'src/app/interfaces/recurso.interface';
import { RecursoService } from 'src/app/services/recurso.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Supercategoria } from 'src/app/interfaces/supercategoria.interface';
import { Tipo } from 'src/app/interfaces/tipo.interface';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { CategoriaService } from 'src/app/services/categoria.service';
import { TipoService } from 'src/app/services/tipo.service';
import { SuperCategoriaService } from 'src/app/services/super-categoria.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dialog-edit-recurso',
  templateUrl: './dialog-edit-recurso.component.html',
  styleUrls: ['./dialog-edit-recurso.component.scss']
})
export class DialogEditRecursoComponent implements OnInit {

  recurso: RecursoInterface;
  arraySuperCategoria: Supercategoria[];
  arrayTipo:Tipo[];
  categoriaSeleccionada: number;
  tipoSeleccionado:number;
  arrayCategorias:Categoria[];
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private recursoService: RecursoService,
  public dialogRef: MatDialogRef<DialogEditRecursoComponent>,
  private categoriaService : CategoriaService,
  private tipoService: TipoService,
  private superCategoriaService: SuperCategoriaService,
  public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getCategorias();
    this.getTipos();
    this.getListaSuperCategorias('Lista Cargada');

    this.recurso = this.data.recurso;
    
  }
  saveRecurso() {
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
  }

}
