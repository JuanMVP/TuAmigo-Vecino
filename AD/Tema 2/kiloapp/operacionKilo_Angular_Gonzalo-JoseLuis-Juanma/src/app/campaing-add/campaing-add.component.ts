import { Component, OnInit } from '@angular/core';
import { CampaniaService } from '../services/campania.service';
import { CampaingCreateDto } from '../dto/addCampaing.dto';

@Component({
  selector: 'app-campaing-add',
  templateUrl: './campaing-add.component.html',
  styleUrls: ['./campaing-add.component.css']
})
export class CampaingAddComponent implements OnInit {
  nombre:string;
  descripcion:string;
  codigo:string;

  constructor(private campaniaService:CampaniaService) { }

  ngOnInit() {
  }


  campaignCreate(){
    const campaniaDto = new CampaingCreateDto(this.nombre,this.descripcion,this.codigo);
      this.campaniaService.addCampaing(campaniaDto).subscribe(
        campania =>{
          console.log(campania);
        }
      )

  }

}
