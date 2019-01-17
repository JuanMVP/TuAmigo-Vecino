import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from '../session/session.service';
import { Observable } from 'rxjs';
import { RecursoInterface } from '../interfaces/recurso.interface';
import { environment } from 'src/environments/environment';
import { Categoria } from '../interfaces/categoria.interface';
import { PrestarDto } from '../dto/prestar-recurso.dto';

const recursosUrl = `${environment.apiUrl}/recurso`;

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

constructor(private http: HttpClient, private sessionService: SessionService){}




getAllRecursos(): Observable<RecursoInterface[]>{
const requestOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.sessionService.getToken()}`,
                'Access-Control-Allow-Origin': '*'
    })
};
    return this.http.get<RecursoInterface[]>(`${recursosUrl}/all`, requestOptions);
}

eliminarRecurso(id: number): Observable<RecursoInterface> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`
      })
    };
    return this.http.delete<RecursoInterface>(`${recursosUrl}/${id}`, requestOptions);
  }

  updateRecurso(recurso: RecursoInterface): Observable<RecursoInterface> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`
      })
    };

    return this.http.put<RecursoInterface>(`${recursosUrl}/edit/${recurso.id}`, recurso, requestOptions);
  }


  prestarRecurso(prestarRecursoDto: PrestarDto, element:RecursoInterface) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`
      })
    };
    return this.http.put(`${recursosUrl}/prestar/${element.id}`, prestarRecursoDto, requestOptions); 
  }


  devolverRecurso(element:RecursoInterface) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`
      })
    };

    return this.http.put<RecursoInterface>(`${recursosUrl}/devolver/${element.id}`, element, requestOptions);
  }


}


