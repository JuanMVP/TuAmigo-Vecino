import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Aportacion } from '../interfaces/aportacion.interface';


const authUrl = `${environment.apiUrl}`;

const requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Access-Control-Allow-Origin': '*'
    })
  };

  @Injectable({
    providedIn: 'root'
})
export class AportacionService {

    constructor(private http: HttpClient, private authService: AuthService) { }


        getAllAportacion(id: number): Observable < Aportacion[] > {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.authService.getToken()}`,
                'Access-Control-Allow-Origin': '*'
            })
            return this.http.get < Aportacion[] > (`${authUrl}/aportacion/list/${id}`, requestOptions);
          }

}