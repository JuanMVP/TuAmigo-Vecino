import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatNativeDateModule, MatDatepickerModule, MatIconModule, MatCheckboxModule, MatCardModule, MatRadioModule, MatListModule, } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { CampaniasComponent } from './campanias/campanias.component';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthService } from './services/auth.service';
import { CampaniaService } from './services/campania.service';
import { MiscampaniasComponent } from './miscampanias/miscampanias.component';
import { CampaingAddComponent } from './campaing-add/campaing-add.component'
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import {MatSelectModule} from '@angular/material/select';
import { AportacionComponent } from './aportacion/aportacion.component';
import { DatamasterComponent } from './datamaster/datamaster.component';
import { DataMasterService } from './services/datamaster.service';
import { DialogdatonuevoComponent } from './dialogdatonuevo/dialogdatonuevo.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioAdminComponent,
    CampaingAddComponent,
    RegisterComponent,
    InicioComponent,
    CampaniasComponent,
    MiscampaniasComponent,
    CampaingAddComponent,
    AportacionComponent,
    DatamasterComponent,
    DialogdatonuevoComponent

  ],

  entryComponents: [
    DialogdatonuevoComponent,
    
],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule


  ],



  providers: [AuthService, CampaniaService,DataMasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }


