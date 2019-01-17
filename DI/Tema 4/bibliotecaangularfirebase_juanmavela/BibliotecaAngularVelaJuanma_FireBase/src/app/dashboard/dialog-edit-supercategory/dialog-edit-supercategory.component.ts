import { Component, OnInit, Inject } from '@angular/core';
import { Supercategoria } from 'src/app/interfaces/supercategoria.interface';
//import { SuperCategoriaService } from 'src/app/services/super-categoria.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-edit-supercategory',
  templateUrl: './dialog-edit-supercategory.component.html',
  styleUrls: ['./dialog-edit-supercategory.component.scss']
})
export class DialogEditSupercategoryComponent implements OnInit {
  superCategory: Supercategoria;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  //private superCategoriaService: SuperCategoriaService,
  public dialogRef: MatDialogRef<DialogEditSupercategoryComponent>) { }

  ngOnInit() {

    this.superCategory = this.data.superCategory;
  }


   /* saveSuperCategory(){
      this.superCategoriaService.updateSuperCategory(this.superCategory).subscribe(superCategory => {
        this.dialogRef.close();
      });
    }*/
}
