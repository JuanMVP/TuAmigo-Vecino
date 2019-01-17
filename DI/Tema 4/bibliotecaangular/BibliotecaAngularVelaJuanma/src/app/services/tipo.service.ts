import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SessionService } from '../session/session.service';
import { Tipo } from '../interfaces/tipo.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


const tipoUrl = `${environment.apiUrl}/categoria`;

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }


  getAllTipos(): Observable<Tipo[]>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.sessionService.getToken()}`,
                'Access-Control-Allow-Origin': '*'
    })
    };
  
    return this.http.get<Tipo[]>(`${tipoUrl}/all`, requestOptions);
  
  
  }




}
