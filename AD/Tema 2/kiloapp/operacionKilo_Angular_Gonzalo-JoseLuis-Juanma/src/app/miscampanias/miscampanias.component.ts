import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CampaniaService } from '../services/campania.service';
import { MyCampanias } from '../interfaces/mycampanias.interface';

@Component({
  selector: 'app-miscampanias',
  templateUrl: './miscampanias.component.html',
  styleUrls: ['./miscampanias.component.css']
})
export class MiscampaniasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'codigo', 'acciones'];
  dataSource: MyCampanias[];

  constructor(private campaniaService: CampaniaService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getListMyCampaigns('Lista campañas cargada');
  }

  getListMyCampaigns(mensaje:string) {
    this.campaniaService.getMyCampaigns().subscribe(listMyCampaigns => {
      this.dataSource = listMyCampaigns;

    }, error =>  {
      this.snackBar.open('Error al obtener campañas', 'Cerrar', {
        duration: 3000,
      });
    });
  }

}
