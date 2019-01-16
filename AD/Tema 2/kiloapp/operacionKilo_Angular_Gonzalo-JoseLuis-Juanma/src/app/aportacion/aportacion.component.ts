import { Component, OnInit } from '@angular/core';
import { Aportacion } from '../interfaces/aportacion.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AportacionService } from '../services/aportacion.service';
import { CampaniaService } from '../services/campania.service';
import { CampaniasComponent } from '../campanias/campanias.component';

@Component({
  selector: 'app-aportacion',
  templateUrl: './aportacion.component.html',
  styleUrls: ['./aportacion.component.css']
})
export class AportacionComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cantidad', 'campanya', 'aportacion'];
  dataSource: Aportacion[];
  id: number;
  campaniaService: CampaniaService;


  constructor(private aportacionService: AportacionService,
    public snackBar: MatSnackBar) { }

    ngOnInit() {
      this.getAportaciones('Listado de aportaciones cargada');
    }
    
   getAportaciones(mensaje: string) {
    this.aportacionService.getAllAportacion(this.id).subscribe(listaAportaciones => {
      this.dataSource = listaAportaciones;

      this.snackBar.open(mensaje, 'Cerrar', {
        duration: 3000,
        verticalPosition: 'top'
      });
    }, error => {
      this.snackBar.open('Error al obtener datos', 'Cerrar', {
        duration: 3000,
      });
    });
  }

  
  }
  