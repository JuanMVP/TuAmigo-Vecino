import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CampaniasComponent } from './campanias/campanias.component';
import { MiscampaniasComponent } from './miscampanias/miscampanias.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { CampaingAddComponent } from './campaing-add/campaing-add.component';
import { AportacionComponent } from './aportacion/aportacion.component';
import { DatamasterComponent } from './datamaster/datamaster.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicioAdmin', component: InicioAdminComponent },
  { path: 'addCampaign', component: CampaingAddComponent },
  { path: 'aportacion', component: AportacionComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'campanias', component: CampaniasComponent },
  { path: 'miscampanias', component: MiscampaniasComponent },
  { path: 'dataMasterList', component: DatamasterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }