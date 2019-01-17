import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
//import { SuperCategoriaService } from 'src/app/services/super-categoria.service';
import { SuperCategoryDto } from 'src/app/dto/crear-supercategory.dto';

@Component({
  selector: 'app-dialog-add-supercategory',
  templateUrl: './dialog-add-supercategory.component.html',
  styleUrls: ['./dialog-add-supercategory.component.scss']
})
export class DialogAddSupercategoryComponent implements OnInit {
  name:string;
  constructor( public dialogRef: MatDialogRef<DialogAddSupercategoryComponent>) { }

  ngOnInit() {
  }

  /*addSuperCategory(){
    const crearSuperCategoryDto = new SuperCategoryDto(this.name);
    this.superCategoriaService.superCategoryCreate(crearSuperCategoryDto).subscribe(crearSuperCategoryResp =>{
      this.dialogRef.close(crearSuperCategoryResp);
    });
  }*/

}
