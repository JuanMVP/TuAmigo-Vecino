import { Component, OnInit,Inject } from '@angular/core';
import { RecursoInterface } from 'src/app/interfaces/recurso.interface';
import { UsuarioInterface } from 'src/app/interfaces/usuario.interface';
import { RecursoService } from 'src/app/services/recurso.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogEditRecursoComponent } from '../dialog-edit-recurso/dialog-edit-recurso.component';
import { PrestarDto } from 'src/app/dto/prestar-recurso.dto';

@Component({
  selector: 'app-prestar',
  templateUrl: './prestar.component.html',
  styleUrls: ['./prestar.component.scss']
})
export class PrestarComponent implements OnInit {
recurso: RecursoInterface;
userId:number;
userArray:UsuarioInterface[];

  constructor(@Inject(MAT_DIALOG_DATA)public data:any,
  private recursoService: RecursoService,
  public dialogRef: MatDialogRef<DialogEditRecursoComponent>,
  private userService: UsuarioService) { }

  ngOnInit() {

    this.recurso = this.data.recurso;
    this.getListaUsuarios('lista de usuarios cargada')
    
  }
  prestamoRecurso() {
    const prestarRecursoDto = new PrestarDto(this.userId);

    this.recursoService.prestarRecurso(prestarRecursoDto, this.recurso).subscribe(
      note => {
        this.dialogRef.close();
      }
    );
  }

  getListaUsuarios(mensaje: string) {
    this.userService.getAllUsers().subscribe(listaUsuarios => {
      this.userArray = listaUsuarios;
    });
  }
}
