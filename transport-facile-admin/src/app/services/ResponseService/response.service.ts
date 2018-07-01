import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(
    private http: HttpClient
  ) { }

  getResponseByPostId(postId: string)
  {
    console.log(postId);
    return this.http.get(`http://localhost:3000/response/responseByPostId?postId=${postId}`)
    .pipe(
      tap( (response) => {
        console.log("Response by Post ID.");
      })
    );
  }
}
