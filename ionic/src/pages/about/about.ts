import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationsProvider } from '../../providers/notifications/notifications';
import { Notification } from '../../interfaces/notification.interface';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  notificationsList: Array<Object>;

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
    this.notificationsProvider.getNotificationsList()
    .subscribe( (result) => {
      this.notificationsList = result.post;
    } );
  }
}
