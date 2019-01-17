import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { SigninDto } from '../dto/login.dto';
import { SigninResponse } from '../interfaces/login-response.interface';
import { environment } from "src/environments/environment.prod";


//const authUrl = `${environment.apiUrl}/auth`;

/*const requestOptions = {
    headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Acces-Control-Allow-Origin': '*'
    })
};

@Injectable({
    providedIn: "root"
})

export class SessionService{
    constructor(private http:HttpClient){}
    headers: HttpHeaders= new HttpHeaders({
        'Content-Type' : 'application/json',
        'Acces-Control-Allow-Origin': '*'

    })
    getToken(): string {
        return localStorage.getItem('token');
    }

    setToken(token) {
        localStorage.setItem("accessToken", token);
    }


    login(loginDto: SigninDto): Observable<SigninResponse> {
        return this.http.post<SigninResponse>(`${authUrl}/login`, loginDto, requestOptions);
    }

    setLoginData(loginResponse: SigninResponse) {
        localStorage.setItem('token', loginResponse.token);
        localStorage.setItem('email', loginResponse.email);
        localStorage.setItem('name', loginResponse.name);
        localStorage.setItem('role', loginResponse.role);
        ;
    }

}


*/
