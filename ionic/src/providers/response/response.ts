import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../../interfaces/response.interface';
import { tap } from 'rxjs/operators';

/*
  Generated class for the ResponseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResponseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ResponseProvider Provider');
  }

  addResponseByPostId(responseObject: Object)
  {
    var headers = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('tfa-user_token')}`
      }
    );

    return this.http.post<Response>(`http://localhost:3000/response`, responseObject, { headers })
    .pipe(
      tap( (response) => {
        console.log("Response called.");
      } )
    );
  }

}
