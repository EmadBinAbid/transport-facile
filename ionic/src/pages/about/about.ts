import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationsProvider } from '../../providers/notifications/notifications';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  notificationsList: Array<string>;

  constructor(
    public navCtrl: NavController,
    private notificationsProvider: NotificationsProvider
    )
  {
  }

  ionViewDidLoad()
  {
    this.loadNotificationsList();
  }

  loadNotificationsList()
  {
    this.notificationsList = this.notificationsProvider.getNotificationsList();
  }

}
