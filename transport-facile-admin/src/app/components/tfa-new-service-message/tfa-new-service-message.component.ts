import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from'@angular/forms';

@Component({
  selector: 'app-tfa-new-service-message',
  templateUrl: './tfa-new-service-message.component.html',
  styleUrls: ['./tfa-new-service-message.component.scss']
})
export class TFANewServiceMessageComponent implements OnInit {

  isLateService: boolean = false;
  isEarlyService: boolean = false;

  constructor(
    private router: Router
  ) {
    
   }

  ngOnInit() {
    
  }
  navigate()
  {
    this.router.navigateByUrl('app/serviceType');
  }

  sendMessage(newMessageFormValue)
  {
    console.log(newMessageFormValue);
  }

}
