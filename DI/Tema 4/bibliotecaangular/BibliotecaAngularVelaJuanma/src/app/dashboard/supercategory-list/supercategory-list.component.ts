import { Component, OnInit, ViewChild } from '@angular/core';
import { Supercategoria } from 'src/app/interfaces/supercategoria.interface';
import { SuperCategoriaService } from 'src/app/services/super-categoria.service';
import { MatSnackBar, MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { DialogAddSupercategoryComponent } from '../dialog-add-supercategory/dialog-add-supercategory.component';
import { DialogEditSupercategoryComponent } from '../dialog-edit-supercategory/dialog-edit-supercategory.component';

const ELEMENT_DATA: Supercategoria[] = [];

@Component({
  selector: 'app-supercategory-list',
  templateUrl: './supercategory-list.component.html',
  styleUrls: ['./supercategory-list.component.scss']
})
export class SupercategoryListComponent implements OnInit {
  displayedColumns: string[] = ['id','name','acciones'];
  //dataSource: Supercategoria[];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private superCategoriaService: SuperCategoriaService, public snackBar: MatSnackBar, public dialog: MatDialog) { }


  ngOnInit() {
    this.getListaSuperCategorias('Lista de SuperCategorias cargada')
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListaSuperCategorias(mensaje:string){
    this.superCategoriaService.getAllSuperCategory().subscribe(listaSuperCategorias =>{
      this.dataSource = new MatTableDataSource<Supercategoria>(listaSuperCategorias);
      this.dataSource.paginator = this.paginator

      this.snackBar.open(mensaje,'X',{
        duration:3000,
        verticalPosition:'top'
      });
    },error =>{
      this.snackBar.open('Error al obtener super categorias','X',{

      });
    });
  }

  showSuperCategories(){
    this.superCategoriaService.getAllSuperCategory().subscribe(superCategoryList =>{
      this.dataSource.data=superCategoryList;
    }, error =>{
      console.log('Error, No hay SuperCategorias')
    })
  }


openDialogCrearSuperCategoria(){
  const dialogNuevaSuperCategory = this.dialog.open(DialogAddSupercategoryComponent);
  dialogNuevaSuperCategory.afterClosed().subscribe(resultado =>{
    this.showSuperCategories();
  })
}


openDialogEditarSuperCategoria(element: Supercategoria){
  const dialogEditarSuperCategoria = this.dialog.open(DialogEditSupercategoryComponent,{
    width:'30%',
    data:{
      superCategory:element
    },
  });

  dialogEditarSuperCategoria.afterClosed().subscribe(result =>{
    this.getListaSuperCategorias('Super Categoría Modificada')
  })
}

}
