import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../../interfaces/message';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewMessageService {

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(newMessage)
  {
    // var headers = new HttpHeaders(
    //   {'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${localStorage.getItem('todo-app_token')}`
    //   }
    // );

    var headers = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('tfa_token')}`
      }
    );

    return this.http.post(`http://localhost:3000/post`, newMessage, { headers })
    .pipe(
      tap( (response) => {
        console.log("Posted.");
      } )
    );
  }

  getAllMessages()
  {
    return this.http.get(`http://localhost:3000/post/all-public-posts`)
    .pipe(
      tap( (response) => {
        console.log("All Public Posts.");
      })
    );
  }
}
