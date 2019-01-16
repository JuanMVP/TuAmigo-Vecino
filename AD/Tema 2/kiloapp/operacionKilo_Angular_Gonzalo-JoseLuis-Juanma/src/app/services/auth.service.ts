import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { LoginDto } from '../dto/login.dto';
import { LoginResponse } from '../interfaces/login-response.interface';



import { User } from "../models/user";
import { environment } from "src/environments/environment.prod";
import { RegisterResponse } from "../interfaces/register-response.interface";
import { RegisterDto } from "../dto/register.dto";

const authUrl = `${environment.apiUrl}/auth`;

const requestOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable({
    providedIn: "root"
})

export class AuthService {
    constructor(private htttp: HttpClient) { }
    headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    });

    register(registerDto: RegisterDto): Observable<RegisterResponse> {
        return this.htttp.post<RegisterResponse>(`${authUrl}/signup`, registerDto, requestOptions);
    }




    setUser(user: User) {
        let userString = JSON.stringify(user);
        localStorage.setItem("currentUser", userString);
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    setToken(token) {
        localStorage.setItem("accessToken", token);
    }

    // login(param1, param2): tipoQueDevuelveElMetodo
    login(loginDto: LoginDto): Observable<LoginResponse> {
        return this.htttp.post<LoginResponse>(`${authUrl}/login`, loginDto, requestOptions);
    }

    setRegisterData(registerResponse: RegisterResponse) {
        localStorage.setItem('token', registerResponse.token);
        localStorage.setItem('username', registerResponse.username);
        localStorage.setItem('grupo', registerResponse.grupo);
        localStorage.setItem('email', registerResponse.email);
    }

    setLoginData(loginResponse: LoginResponse) {
        localStorage.setItem('token', loginResponse.token);
        localStorage.setItem('username', loginResponse.username);
        localStorage.setItem('password', loginResponse.password);
        localStorage.setItem('role', loginResponse.role);
    }

    getRole(): string {
        return localStorage.getItem('role')
    }

}

