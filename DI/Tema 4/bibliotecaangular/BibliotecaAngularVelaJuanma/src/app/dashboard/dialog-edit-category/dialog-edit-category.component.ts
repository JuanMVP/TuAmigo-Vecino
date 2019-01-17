import { Component, OnInit, Inject } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-edit-category',
  templateUrl: './dialog-edit-category.component.html',
  styleUrls: ['./dialog-edit-category.component.scss']
})
export class DialogEditCategoryComponent implements OnInit {
  category: Categoria;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private categoryService: CategoriaService,
  public dialogRef: MatDialogRef<DialogEditCategoryComponent>) { }

  ngOnInit() {

    this.category = this.data.category;

  }

  saveCategory(){
    this.categoryService.updateCategory(this.category).subscribe(category => {
      this.dialogRef.close();
    });
  }

}
