import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from '../session/session.service';
import { Supercategoria } from '../interfaces/supercategoria.interface';
import { Observable } from 'rxjs';
import { SuperCategoryDto } from '../dto/crear-supercategory.dto'


const superCategoryUrl = `${environment.apiUrl}/supercategoria`;

@Injectable({
  providedIn: 'root'
})
export class SuperCategoriaService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }



  getAllSuperCategory(): Observable<Supercategoria[]>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.sessionService.getToken()}`,
                'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<Supercategoria[]>(`${superCategoryUrl}/all`, requestOptions)
  }

  superCategoryCreate(superCategoryDto: SuperCategoryDto): Observable<Supercategoria>{
    const requestOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<Supercategoria>(`${superCategoryUrl}/create`,superCategoryDto,requestOptions);
  }

  updateSuperCategory(superCategory: Supercategoria): Observable<Supercategoria>{
    const requestOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`
      })
    };

    return this.http.put<Supercategoria>(`${superCategoryUrl}/edit/${superCategory.id}`, superCategory, requestOptions);

  }

}
