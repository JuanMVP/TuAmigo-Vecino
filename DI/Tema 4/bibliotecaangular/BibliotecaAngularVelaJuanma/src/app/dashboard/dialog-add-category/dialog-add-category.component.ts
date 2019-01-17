import { Component, OnInit } from '@angular/core';
import { CategoriaDto } from 'src/app/dto/crear-categoria.dto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-add-category',
  templateUrl: './dialog-add-category.component.html',
  styleUrls: ['./dialog-add-category.component.scss']
})
export class DialogAddCategoryComponent implements OnInit {
  name:string;
  constructor(private categoriaService: CategoriaService, public dialogRef:MatDialogRef<DialogAddCategoryComponent>) { }

  ngOnInit() {
  }


  addCategory(){
    const crearCategoriaDto = new CategoriaDto(this.name);
    this.categoriaService.categoryCreate(crearCategoriaDto).subscribe(crearCategoriaResp =>{
      this.dialogRef.close(crearCategoriaResp)
    });
    
  }

}
