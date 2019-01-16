import { Component, OnInit } from '@angular/core';
import { Campania } from '../interfaces/campania.interface';
import { DataMasterService } from '../services/datamaster.service';
import { CampaniaService } from '../services/campania.service';
import { MatDialogRef } from '@angular/material';
import { DataMaster } from '../models/dataMaster';

@Component({
  selector: 'app-dialogdatonuevo',
  templateUrl: './dialogdatonuevo.component.html',
  styleUrls: ['./dialogdatonuevo.component.css']
})
export class DialogdatonuevoComponent implements OnInit {
  nombreTipo: string;
  campania:Campania[];
  campanya=0;

  constructor(private dataService: DataMasterService, private campService: CampaniaService, private dialog: MatDialogRef<DialogdatonuevoComponent>) { }

  ngOnInit() {
  }


  saveDataMaster(){
    if(this.campanya!=0){
      const dataCreate = new DataMaster(this.nombreTipo, this.campanya);
      this.dataService.createDataMaster(dataCreate).subscribe(
        data =>{
          this.dialog.close(data)
        }
      )
    }
  }

}
