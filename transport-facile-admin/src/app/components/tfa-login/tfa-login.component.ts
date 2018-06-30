import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/LoginService/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tfa-login',
  templateUrl: './tfa-login.component.html',
  styleUrls: ['./tfa-login.component.scss']
})
export class TFALoginComponent implements OnInit {

  adminId: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginUser()
  {
    console.log(this.adminId);
    console.log(this.password);

    const credentialObject = {
      admin: {
        adminId: this.adminId,
        password: this.password
      }
    };

    console.log(credentialObject);

    this.loginService.login(credentialObject)
    .subscribe( (result) => {
      console.log(result);
      this.router.navigate(['/app']);

    });

  }

}
