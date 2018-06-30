import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../../interfaces/login-response';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;

  constructor(
    private http: HttpClient
  ) 
  {
    this.token = localStorage.getItem('tfa_token');
  }

  login(credentials)
  {
    return this.http.post<LoginResponse>(`http://localhost:3000/loginAdmin`, credentials, {} )
    .pipe(
      tap( (response) => {
        this.token = response.token;
        localStorage.setItem('tfa_token', this.token);
      } )
    );
  }
}
