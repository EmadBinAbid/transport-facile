import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../../interfaces/credentials.interface';
import { tap } from 'rxjs/operators';
import { User } from '../../interfaces/user.interface';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  token: string;

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');

    this.token = localStorage.getItem(`tfa-user_token`);
  }

  login(credentials: Credentials)
  {
    return this.http.post(`http://localhost:3000/loginUser`,  { user: credentials.user } )
    .pipe(
      tap( (response: User)=> {
        this.token = response.token;
        localStorage.setItem(`tfa-user_token`, this.token);
      } )
    );
  }

}
