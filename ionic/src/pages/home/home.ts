import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResponseProvider } from '../../providers/response/response';
import { NotificationsProvider } from '../../providers/notifications/notifications';
// import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactNumber: string;
  email: string;

  infoForm: Object =  {
    dropoffPoint: "",
    serviceType: ""
  };

  constructor(
    public navCtrl: NavController,
    private responseProvider: ResponseProvider,
    private notificationProvider: NotificationsProvider
    // private aboutPage: AboutPage
  ) {

  }

  sendResponse()
  {
    const response: Object = {
      response: {
        postId: this.notificationProvider.getLastNotification()["_id"],
        dropoffPoint: this.infoForm["dropoffPoint"]
      }
    };

    

    if(this.infoForm["serviceType"] === "early")
    {
      response["response"]["earlyService"] = true;
      response["response"]["lateService"] = false;
    }
    else
    {
      response["response"]["earlyService"] = false;
      response["response"]["lateService"] = true;
    }

    console.log(response);

    this.responseProvider.addResponseByPostId(response)
    .subscribe( (result)=> {
      console.log(result);
    } );
  }

}
