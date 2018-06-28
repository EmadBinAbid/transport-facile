import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  infoForm: Object =  {
    contactNumber: "",
    email: "",
    dropoffPoint: "",
    serviceType: ""
  };

  constructor(public navCtrl: NavController) {

  }

  sendInfo()
  {
    if(this.infoForm === "valid")
    {
      console.log(this.infoForm);
    }
    else
    {
      // console.log("Error!");
      console.log(this.infoForm);
    }
  }

}
