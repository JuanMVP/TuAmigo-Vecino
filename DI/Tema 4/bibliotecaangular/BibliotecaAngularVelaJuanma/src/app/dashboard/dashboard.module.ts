import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule, MatDialogModule, MatTableModule, MatChipsModule, MatInputModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { RecursosListComponent } from '../core/recursos-list/recursos-list.component';
import { RecursoService } from '../services/recurso.service';
import { DialogAddRecursoComponent } from './dialog-add-recurso/dialog-add-recurso.component';
import { CrearRecursoService } from '../services/crear-recurso.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogEditRecursoComponent } from './dialog-edit-recurso/dialog-edit-recurso.component';
import { UserListComponent } from './user-list/user-list.component';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { DialogDeleteRecursoComponent } from './dialog-delete-recurso/dialog-delete-recurso.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { DialogDeleteUserComponent } from './dialog-delete-user/dialog-delete-user.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {MatSelectModule} from '@angular/material/select';
import { DialogAddCategoryComponent } from './dialog-add-category/dialog-add-category.component';
import { PrestarComponent } from './prestar/prestar.component';
import { DevolverComponentComponent } from './devolver-component/devolver-component.component';
import { DialogDeleteCategoryComponent } from './dialog-delete-category/dialog-delete-category.component';
import { SupercategoryListComponent } from './supercategory-list/supercategory-list.component';
import { DialogAddSupercategoryComponent } from './dialog-add-supercategory/dialog-add-supercategory.component';
import { DialogEditSupercategoryComponent } from './dialog-edit-supercategory/dialog-edit-supercategory.component';
import { DialogEditCategoryComponent } from './dialog-edit-category/dialog-edit-category.component';


@NgModule({
  imports: [
    CommonModule,
   RouterModule.forChild(DashboardRoutes),
   MatIconModule,
   MatCardModule,
   MatButtonModule,
   MatListModule,
   MatProgressBarModule,
   MatDialogModule,
   MatMenuModule,
   FlexLayoutModule,
   MatTableModule,
   MatChipsModule,
   MatFormFieldModule,
   MatInputModule,
   FormsModule,
   ReactiveFormsModule,
   MatSelectModule,
   MatPaginatorModule
   
  ],
  declarations: [ DashboardComponent, RecursosListComponent, DialogAddRecursoComponent, DialogEditRecursoComponent, UserListComponent, DialogAddUserComponent, DialogDeleteRecursoComponent, DialogEditUserComponent, DialogDeleteUserComponent, CategoryListComponent, DialogAddCategoryComponent, PrestarComponent, DevolverComponentComponent, DialogDeleteCategoryComponent, SupercategoryListComponent, DialogAddSupercategoryComponent, DialogEditSupercategoryComponent, DialogEditCategoryComponent ],
  providers: [
    RecursoService,CrearRecursoService
  ],entryComponents:[
    DialogAddRecursoComponent,DialogEditRecursoComponent,DialogDeleteRecursoComponent,DialogAddUserComponent,DialogEditUserComponent,DialogDeleteUserComponent,DialogAddCategoryComponent,PrestarComponent,DevolverComponentComponent,DialogDeleteCategoryComponent,DialogAddSupercategoryComponent,DialogEditSupercategoryComponent,DialogEditCategoryComponent
  ],
})

export class DashboardModule {}
