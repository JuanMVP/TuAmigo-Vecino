import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria.interface';
//import { CategoriaService } from 'src/app/services/categoria.service';
import { MatSnackBar, MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { DialogAddCategoryComponent } from '../dialog-add-category/dialog-add-category.component';
import { DialogDeleteCategoryComponent } from '../dialog-delete-category/dialog-delete-category.component';
import { DialogEditCategoryComponent } from '../dialog-edit-category/dialog-edit-category.component';

const ELEMENT_DATA: Categoria[] = [];


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','acciones']
  //dataSource: Categoria[]
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) { }


  ngOnInit() {
      //this.getListaCategorias('Lista de categorías cargada');
      //this.showCategory();
  }


  /*getListaCategorias(mensaje:string){
this.categoriaService.getAllCategorias().subscribe(listaCategorias=>{
  this.dataSource = new MatTableDataSource<Categoria>(listaCategorias);
      this.dataSource.paginator = this.paginator

  this.snackBar.open(mensaje,'X',{
    duration:3000,
    verticalPosition:'top'

  });
},error =>{
  this.snackBar.open('Error al obtener categorias', 'X',{
    duration:1000
  });
});
}
getCategorias() {
    
  this.categoriaService.getAllCategorias().subscribe(listaCategorias => {
    this.dataSource.data = listaCategorias;

  }, error => {
    console.log('Error');
  });
}

showCategory(){
  this.categoriaService.getAllCategorias().subscribe(categoryList =>{
    this.dataSource.data = categoryList;
  }, error =>{
    console.log('Error, no ha recibido categorias');
  })
}

openDialogCrearCategoria(){
  const dialogNuevaCategoria = this.dialog.open(DialogAddCategoryComponent);
  
  dialogNuevaCategoria.afterClosed().subscribe(resultado =>{
    this.showCategory();
  })
}
openDialogDeleteCategorias(categoria: Categoria) {
  const dialogDeleteCategoria = this.dialog.open(DialogDeleteCategoryComponent, {
    data: {
      element: categoria
    }
  });

  dialogDeleteCategoria.afterClosed().subscribe(response => {
    this.getCategorias();
  }, error => {
    console.log(error);
  });
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

openDialogEditarCategoria(element: Categoria){
  const dialogEditarCategoria = this.dialog.open(DialogEditCategoryComponent,{
    width:'30%',
    data: {category:element},
  });
  dialogEditarCategoria.afterClosed().subscribe(result => {
    this.getListaCategorias('Categoria Modificada');
  });
}
*/

}
