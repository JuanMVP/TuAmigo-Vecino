import { Component, OnInit } from '@angular/core';
import { DataMasterCreate } from '../dto/datamaster-create.dto';
import { CampaingCreateDto } from '../dto/addCampaing.dto';
import { DataMasterService } from '../services/datamaster.service';
import { DataMasterInterface } from '../interfaces/data-master-interface';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogdatonuevoComponent } from '../dialogdatonuevo/dialogdatonuevo.component';

@Component({
  selector: 'app-datamaster',
  templateUrl: './datamaster.component.html',
  styleUrls: ['./datamaster.component.css']
})
export class DatamasterComponent implements OnInit {
  nombreTipo:string;
  campania:number;
  aportacion:string;
  dataSource:DataMasterInterface[];
  displayedColumns: string[] = ['id', 'nombre', 'campaña','acciones'];

  constructor(private dataMasterService: DataMasterService, private dialogo: MatDialog, private bar: MatSnackBar) { }

  ngOnInit() {
    this.getAllDataMaster('Lista Cargada');
  }

  addDataMaster(){
    const dataMasterDto = new DataMasterCreate(this.nombreTipo,this.campania);
    this.dataMasterService.createDataMaster(dataMasterDto).subscribe(
      dataMaster =>{
        console.log(dataMaster);
      }
    )
  }

  openDialogNuevoDato() {
    const dialogoNuevoDato = this.dialogo.open(DialogdatonuevoComponent);

    dialogoNuevoDato.afterClosed().subscribe(result => {
      this.getAllDataMaster('Dato creado');
    });
  }

  deleteDataMaster(dataMaster: DataMasterInterface){
    this.dataMasterService.deleteDataMaster(dataMaster).subscribe(
      dataDelete =>{
        console.log(dataDelete);
        location.reload();
      }
      
    );
  }

  getAllDataMaster(respuesta:string){
    this.dataMasterService.allDataMaster(1).subscribe(
      allData =>{
        this.dataSource= allData;
        this.bar.open(respuesta,'cerrar',{
          verticalPosition:'top',
          duration:3000
        });
      } ,error =>{
          this.bar.open('No se pudo obtener la lista de datos', 'cerrar',{
            duration:3000
          });
      }
    );
  }




}
