import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {  } from 'selenium-webdriver/http';
import { SessionService } from '../session/session.service';
import { UsuarioInterface } from '../interfaces/usuario.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrearUsuarioDto } from '../dto/crear-usuario.dto';
import { CrearUsuario } from '../interfaces/crear-usuario.interface';
import { RecursoInterface } from '../interfaces/recurso.interface';

  const usuarioUrl = `${environment.apiUrl}/user`;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }


  getAllUsers(): Observable<UsuarioInterface[]>{
    const requestOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.sessionService.getToken()}`,
                'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<UsuarioInterface[]>(`${usuarioUrl}/all`, requestOptions);

  }

  
  userCreate(crearUsuarioDto: CrearUsuarioDto): Observable<CrearUsuario>{
    const requestOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };


    return this.http.post<CrearUsuario>(`${usuarioUrl}/create`, crearUsuarioDto, requestOptions);


  }


    updateUser(usuario: UsuarioInterface): Observable<UsuarioInterface>{
      const requestOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.sessionService.getToken()}`
        })
      };

      return this.http.put<UsuarioInterface>(`${usuarioUrl}/${usuario.id}`,usuario, requestOptions);

    }

    deleteUser(id:number): Observable<UsuarioInterface>{
      const requestOptions={
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.sessionService.getToken()}`
        })
      };

      return this.http.delete<UsuarioInterface>(`${usuarioUrl}/${id}`, requestOptions);

    }

}
