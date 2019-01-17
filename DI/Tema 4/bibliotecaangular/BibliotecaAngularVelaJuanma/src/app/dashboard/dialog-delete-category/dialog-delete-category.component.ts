import { Component, OnInit,Inject } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-dialog-delete-category',
  templateUrl: './dialog-delete-category.component.html',
  styleUrls: ['./dialog-delete-category.component.scss']
})
export class DialogDeleteCategoryComponent implements OnInit {

  categorias: Categoria;
  dataSource: Categoria[];
  palabraBorrar: string;
  name=this.data.element.name;
  id=this.data.element.id;

  constructor(private categoriaService:CategoriaService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<DialogDeleteCategoryComponent>) { }

  ngOnInit() {
  }

  getCategorias() {
    console.log('entra en el log');
    this.categoriaService.getAllCategorias().subscribe(listaCategorias => {
      this.dataSource = listaCategorias;
      
    }, error => {
      console.log('No entra');
    });
  }

  eliminarCategoria(id) {
    this.categoriaService.eliminarCategoria(id).subscribe(listaCategorias => {
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
