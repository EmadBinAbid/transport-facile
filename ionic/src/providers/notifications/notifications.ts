import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {

  notificationsList = [
    "Kashif Pirwani updated: 1",
    "Kashif Pirwani updated: 2",
    "Kashif Pirwani updated: 3"
  ];

  constructor() {
    console.log('Hello NotificationsProvider Provider');
  }

  getNotificationsList()
  {
    return this.notificationsList;
  }

}
