import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { tap } from 'rxjs/operators';
import { Notification } from '../../interfaces/notification.interface';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {

  notificationsList = [];

  constructor(
    private http: HttpClient
  ) {
    console.log('Hello NotificationsProvider Provider');
  }

  getNotificationsList()
  {
    return this.http.get<Notification>(`http://localhost:3000/post/all-public-posts`)
    .pipe(
      tap( (response) => {
        this.notificationsList = response.post;
      } )
    );
  }

  getLastNotification()
  {
    return this.notificationsList[this.notificationsList.length - 1];
  }
}
