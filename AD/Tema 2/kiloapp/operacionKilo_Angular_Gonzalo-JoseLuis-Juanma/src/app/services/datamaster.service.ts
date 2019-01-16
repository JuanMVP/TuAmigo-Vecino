import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { DataMasterCreate } from '../dto/datamaster-create.dto';
import { Observable } from 'rxjs';
import { DataMasterInterface } from '../interfaces/data-master-interface';


const apiUrl = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class DataMasterService{
    constructor(private http: HttpClient, private authService:AuthService){}

    createDataMaster(dataMasterDto: DataMasterCreate): Observable<DataMasterInterface> {
        const requestOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authService.getToken()}`,
            'Access-Control-Allow-Origin': '*'
          })
        };
        return this.http.post<DataMasterInterface>(`${apiUrl}/campaign/data/addData`, dataMasterDto, requestOptions);
      }

      deleteDataMaster(dataMaster: DataMasterInterface){
          const requestOptions = {
             headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.authService.getToken()}`,
              'Access-Control-Allow-Origin': '*'
            })
          };
      
          const id_dataMaster = dataMaster.id;
      
          return this.http.delete(`${apiUrl}/campaign/data/delete/${id_dataMaster}`, requestOptions);
         }

         allDataMaster(id:number): Observable<DataMasterInterface[]>{
           const requestOptions={
             headers:new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.authService.getToken()}`,
              'Access-Control-Allow-Origin': '*'


              
             })
           };
           return this.http.get<DataMasterInterface[]>(`${apiUrl}/list/${id}`, requestOptions);
         }
    
}