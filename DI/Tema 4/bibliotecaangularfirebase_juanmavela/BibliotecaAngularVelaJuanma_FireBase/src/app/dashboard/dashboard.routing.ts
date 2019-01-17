import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { RecursosListComponent } from '../core/recursos-list/recursos-list.component';
import { DialogAddRecursoComponent } from './dialog-add-recurso/dialog-add-recurso.component';
import { UserListComponent } from './user-list/user-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SupercategoryListComponent } from './supercategory-list/supercategory-list.component';

export const DashboardRoutes: Routes = [

  {
    path: '',
    children:[{
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'recursos',
      component: RecursosListComponent
    },
    {
      path: 'addRecurso',
      component: DialogAddRecursoComponent
    },
    {
      path: 'usuarios',
      component: UserListComponent
    },
    {
      path: 'categorias',
      component: CategoryListComponent
    },
    {
      path: 'supercategorias',
      component: SupercategoryListComponent
    }
  ]
}];
    
    

