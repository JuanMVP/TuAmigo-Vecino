import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from '../session/session.service';
import { CrearRecursoDto } from '../dto/crear-recurso.dto';
import { Observable } from 'rxjs';
import { CrearRecurso } from '../interfaces/crear-recurso.interface';

const registroRecursoUrl = `${environment.apiUrl}/recurso`;

const token = localStorage.getItem('token');
const requestOptions ={
  headers: new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};



@Injectable({
  providedIn: 'root'
})
export class CrearRecursoService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  recursoCreate(crearRecursoDto: CrearRecursoDto): Observable<CrearRecurso>{
    const requestOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<CrearRecurso>(`${registroRecursoUrl}/create`, crearRecursoDto, requestOptions);

  }



}
