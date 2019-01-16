import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { Campania } from '../interfaces/campania.interface';
import { CampaingCreateDto } from '../dto/addCampaing.dto';
import { CampaingCreateResponse } from '../interfaces/campaing-create-response.interface';
import { CodeDto } from '../dto/code.dto';
import { CodeResponse } from '../interfaces/code-response.interface';
import { MyCampanias } from '../interfaces/mycampanias.interface';



const authUrl = `${environment.apiUrl}`;

@Injectable({
    providedIn: 'root'
})

export class CampaniaService {

    private idSource = new BehaviorSubject('');
  currentId = this.idSource.asObservable();

    constructor(private http: HttpClient, private authService: AuthService) { }

    getAllCampanias(): Observable<Campania[]> {
        const requestOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.authService.getToken()}`,
                'Access-Control-Allow-Origin': '*'
            })
        };

        return this.http.get<Campania[]>(`${authUrl}/auth/campaigns`, requestOptions);
    }

    joinCampaign(codeDto: CodeDto,): Observable<CodeResponse>{
        const requestOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authService.getToken()}`,
            'Access-Control-Allow-Origin': '*'
          })
        };
    
        return this.http.post<CodeResponse>(`${authUrl}/campaign/join`,codeDto, requestOptions);
      }

      getMyCampaigns(): Observable<MyCampanias[]> {
        const requestOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authService.getToken()}`,
            'Access-Control-Allow-Origin': '*'
          })
        };
    
        return this.http.get<MyCampanias[]>(`${authUrl}/campaign/mylist`, requestOptions);
      }

    campaingDelete(campaing: Campania){
        const requestOptions ={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization': `Bearer ${this.authService.getToken()}`,
                'Acces-Control-Allow-Origin': '*'
            })
        }
    }

    addCampaing(campaingCreateDto: CampaingCreateDto): Observable<CampaingCreateResponse>{
        const requestOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.authService.getToken()}`,
                'Acces-Control-Allow-Origin': '*'
            })
        };

        return this.http.post<CampaingCreateResponse>(`${authUrl}/campaing/addCampaing`, campaingCreateDto, requestOptions);
        
    }

    passidCampanya(id: number) {
        this.idSource.next(id.toString());
      }
}
