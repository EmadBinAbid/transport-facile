import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { LoginProvider } from '../../providers/login/login';
import { Credentials } from '../../interfaces/credentials.interface';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  loginForm =  {
    studentId: "",
    password: ""
  };

  constructor(
    private loginProvider: LoginProvider,
    private navController: NavController 
  ) {
    console.log('Hello LoginComponent Component');
  }

  loginUser()
  {
    const credentialObject: Credentials = {
      user: this.loginForm
    };

    console.log(credentialObject);

    this.loginProvider.login(credentialObject)
    .subscribe( (result) => {
      console.log("Hiiiiiiii");
      console.log(result);

      this.navController.push(TabsPage);
    } );
  }

}
