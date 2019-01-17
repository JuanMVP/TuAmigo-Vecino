import { Component, OnInit } from '@angular/core';
import { CrearRecursoService } from 'src/app/services/crear-recurso.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { CrearRecursoDto } from 'src/app/dto/crear-recurso.dto';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { Tipo } from 'src/app/interfaces/tipo.interface';
import { CategoriaService } from 'src/app/services/categoria.service';
import { TipoService } from 'src/app/services/tipo.service';
import { Supercategoria } from 'src/app/interfaces/supercategoria.interface';
import { SuperCategoriaService } from 'src/app/services/super-categoria.service';

@Component({
  selector: 'app-dialog-add-recurso',
  templateUrl: './dialog-add-recurso.component.html',
  styleUrls: ['./dialog-add-recurso.component.css']
})
export class DialogAddRecursoComponent implements OnInit {
  
  title:string;
  autor:string;
  anyo:number;
  content:string;
  //categoryId:number;
  arrayCategorias:Categoria[];
  typeId:number;
  categoryId:number;
  arrayTipo:Tipo[];
  categoriaSeleccionada: number;
  tipoSeleccionado:number;
  arraySuperCategoria: Supercategoria[];
  
  

  constructor(private crearRecursoService: CrearRecursoService, private superCategoriaService: SuperCategoriaService, private tipoService:TipoService, private categoriaService: CategoriaService, public dialogRef: MatDialogRef<DialogAddRecursoComponent>, public snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.getCategorias();
    this.getTipos();
    this.getListaSuperCategorias('Lista Cargada');

  }


  addRecurso(){
    
      const crearRecursoDto = new CrearRecursoDto(this.title,this.autor,this.anyo,this.content,this.categoriaSeleccionada,this.tipoSeleccionado);
      this.crearRecursoService.recursoCreate(crearRecursoDto).subscribe(crearRecursoResp =>{
        this.dialogRef.close(crearRecursoResp);
      
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


