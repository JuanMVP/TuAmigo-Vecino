import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SessionService } from '../session/session.service';
import { environment } from 'src/environments/environment.prod';
import { CategoriaDto } from '../dto/crear-categoria.dto';



const categoriaUrl = `${environment.apiUrl}/categoria`;

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  

  constructor(private http: HttpClient, private sessionService: SessionService){}



  getAllCategorias(): Observable<Categoria[]>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.sessionService.getToken()}`,
                'Access-Control-Allow-Origin': '*'
    })
    };
  
    return this.http.get<Categoria[]>(`${categoriaUrl}/all`, requestOptions);
  
  
  }

  categoryCreate(crearCategoriaDto: CategoriaDto):Observable<Categoria>{
    const requestOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };


    return this.http.post<Categoria>(`${categoriaUrl}/create`, crearCategoriaDto, requestOptions);

  }

  eliminarCategoria(id: number): Observable<Categoria> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`
      })
    };
    return this.http.delete<Categoria>(`${categoriaUrl}/${id}`, requestOptions);
  }

  updateCategory(category: Categoria): Observable<Categoria>{
    const requestOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`
      })
    };
    return this.http.put<Categoria>(`${categoriaUrl}/edit/${category.id}`,category,requestOptions);
  }
}
