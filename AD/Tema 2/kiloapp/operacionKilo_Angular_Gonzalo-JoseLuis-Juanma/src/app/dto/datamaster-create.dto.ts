import { CampaingCreateDto } from "./addCampaing.dto";
import { CampaniasComponent } from "../campanias/campanias.component";

export class DataMasterCreate{
    nombreTipo: string;
    campania: number;
    

    constructor(nombreTipo:string, campania:number){
        this.nombreTipo= nombreTipo;
        this.campania=campania;
        
    }
}