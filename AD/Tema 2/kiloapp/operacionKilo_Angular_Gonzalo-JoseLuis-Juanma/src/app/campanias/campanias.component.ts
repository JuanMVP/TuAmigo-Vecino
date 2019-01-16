import { Component, OnInit } from '@angular/core';
import { Campania } from '../interfaces/campania.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CampaniaService } from '../services/campania.service';
import { MatDialog } from '@angular/material/dialog';
import { CodeDto } from '../dto/code.dto';



@Component({
  selector: 'app-campanias',
  templateUrl: './campanias.component.html',
  styleUrls: ['./campanias.component.css']
})
export class CampaniasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'codigo', 'acciones'];
  dataSource: Campania[];
  codigo: string;
  codeDto: CodeDto;

  constructor(private campaniaService: CampaniaService,
    public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.getListaCampanias('Listado de usuarios cargado');
  }

  getListaCampanias(mensaje: string) {
    this.campaniaService.getAllCampanias().subscribe(listaCampanias => {
      this.dataSource = listaCampanias;

      this.snackBar.open(mensaje, 'X', {
        duration: 3000,
        verticalPosition: 'top'
      });
    }, error =>  {
      this.snackBar.open('Error al obtener notas', 'X', {
        duration: 1000,
      });
    });
  }

  doJoin() {
    this.codeDto  = new CodeDto(this.codigo);
    console.log(this.codigo);
    console.log(this.codeDto);
    this.campaniaService.joinCampaign(this.codeDto).subscribe(codeResp => {
      console.log(codeResp);

    }, error => {
      console.log(error); 
    }
    );
  }

  passIdCampanya(id:number) {
    this.campaniaService.passidCampanya(id);
  }
  

}
